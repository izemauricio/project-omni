const connection = require('../database/connection');
module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const ong = await connection('ongs').where('id',id).select('name').first(); // retorna 1 em vez de arr
        if(!ong) {
            return response.status(400).json({error:'ong not found with this id'});
        }
        return response.json(ong);
    },
}; 