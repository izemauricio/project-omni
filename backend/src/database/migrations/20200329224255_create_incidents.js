
exports.up = function (knex) {
    knex.schema.createTable('incidents', function (table) {
        table.increments(); // chave primaria numerica com auto increment
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); // float

        table.string('ong_id').notNullable(); // relation
        table.foreign('ong_id').references('id').inTable('ongs'); // chave estrangeira do field ONG_ID pra sempre linkar com algo ja existente np field ID da tabela ONGS
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('incidents');
};
