
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('recipes').truncate()
  await knex('steps_ingredients').insert([
    { ingredient_id: 1, step_id: 1, quantity: '50' },
    { ingredient_id: 2, step_id: 4, quantity: '950' }
  ])
};
