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
        return response.json({ id });
    },
    async get(request, response) {
        const ongs = await connection('incidents').select('*');
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