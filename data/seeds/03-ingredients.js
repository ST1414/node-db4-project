
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('recipes').truncate()
  await knex('ingredients').insert([
    {ingredient_name: 'coffee beans'},
    {ingredient_name: 'water'}
  ])
  
};
