
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('recipes').truncate()
  await knex('recipes').insert([
    {recipe_name: 'How to make coffee'},
  ])
  
};
