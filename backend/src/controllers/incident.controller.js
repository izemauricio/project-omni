const connection = require('../database/connection');
module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        console.log(`inserido ${id} no banco`);

        return response.json({ id });
    },

    async get(request, response) {
        const { page = 1 } = request.query;

        console.log(request.query);

        //const count = await connection('incidents').count()[0];
        const [count] = await connection('incidents').count();

        const ongs = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']); // pra nao sobrepor o id do incident com id da ong

        response.header('X-Total-Count', count['count(*)']); // propriedade count(*) do objeto

        console.log(ongs);

        return response.json(ongs);
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        if (!incident) {
            return response.status(401).json({ error: 'sem id' });
        }
        if (ong_id != incident.ong_id) {
            console.log(id, ong_id, incident);
            return response.status(401).json({ error: 'sem autorizacao' });
        }
        await connection('incidents').where('id', id).delete();
        return response.status(204).send(); // sucess, but no content to return
    }
};