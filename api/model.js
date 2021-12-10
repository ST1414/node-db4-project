const db = require('../data/db-config');

async function getRecipeById (recipeId) {

    const query = await db('recipes as r')
        .join('steps as s','s.recipe_id','r.recipe_id')
        .leftJoin('steps_ingredients as si', 's.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .select(
            'r.recipe_id', 
            'r.recipe_name', 
            'r.created_at', 
            's.step_id', 
            's.step_number', 
            's.step_instructions', 
            'i.ingredient_id',
            'i.ingredient_name',
            'si.quantity')
        .where('r.recipe_id', recipeId)

    // ----- Build Recipe Info ----- 
    let result = { steps: [] };
    result.recipe_id = query[0].recipe_id;
    result.recipe_name = query[0].recipe_name;
    result.recipe_created_at = query[0].created_at;
    
    // ----- Pull Ingredient Info with step_id ----- 
    let allIngredients = [];
    query.forEach( x => {
        if (x.ingredient_id !== null){
            allIngredients.push({ 
                step_id: x.step_id,
                ingredient_id: x.ingredient_id,
                ingredient_name: x.ingredient_name,
                quantity: x.quantity
            })
        }
        
    })

    // ----- Build Steps Array -----
    for (let i = 0; i < query.length; i++){
        let stepIngredients =[];
        if (query[i].ingredient_id !== null){
            stepIngredients = allIngredients.filter( item => item.step_id === query[i].step_id);
        }

        // ----- Check to see if a step already exists -----
        if ( result.steps.length !== 0 && query[i].step_id === result.steps[result.steps.length - 1].step_id) {
            continue;
        }

        result.steps.push({ 
            step_id: query[i].step_id, 
            step_number: query[i].step_number, 
            step_instructions: query[i].step_instructions, 
            step_ingredients: stepIngredients
        })
    }
    
    return result;
}

module.exports = { getRecipeById };

/*
SELECT 
    r.recipe_id,
    r.recipe_name,
    r.created_at,
    s.step_id,
    s.step_number,
    s.step_instructions,
    i.ingredient_id,
    i.ingredient_name,
    si.quantity
FROM recipes as r
JOIN steps as s
    ON r.recipe_id = s.recipe_id
LEFT JOIN steps_ingredients as si
    ON s.step_id = si.step_id
LEFT JOIN ingredients as i
    ON si.ingredient_id = i.ingredient_id
WHERE r.recipe_id = 1;
*/