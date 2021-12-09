
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
        })
        .createTable('steps', table => {
            table.increments('step_id')
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id')
        })
        .create('steps_ingredients', table => {
            table.increments('step_ingredient_id')
        })
};

exports.down = async function(knex) {

    await knex.schema
        .dropTableIfExists('steps_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')

};
