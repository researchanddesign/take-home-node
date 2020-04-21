exports.up = knex => {
    const addDefaultFields = table => {
        table.increments('id').primary();
        table.dateTime('createdAt');
        table.dateTime('updatedAt');
    };
    return knex.schema
        .createTable('list', table => {
            addDefaultFields(table);
            table.string('name');
        })
        .createTable('todo', table => {
            addDefaultFields(table);
            table.string('name');
            table
                .integer('listId')
                .unsigned()
                .references('id')
                .inTable('list')
                .onDelete('CASCADE');
        });
};

exports.down = function (knex, Promise) { };
