
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('recipes').truncate()
  await knex('steps').insert([
    {step_number: 1, step_instructions: 'Weigh coffee beans', recipe_id: 1},
    {step_number: 2, step_instructions: 'Grind coffee beans', recipe_id: 1},
    {step_number: 3, step_instructions: 'Pour ground coffee into coffee maker', recipe_id: 1},
    {step_number: 4, step_instructions: 'Weigh water', recipe_id: 1},
    {step_number: 5, step_instructions: 'Pour water into coffee maker', recipe_id: 1},
    {step_number: 6, step_instructions: 'Turn on coffee maker', recipe_id: 1},
    {step_number: 7, step_instructions: 'Wait 5 minutes, and enjoy', recipe_id: 1}
  ])
  
};
