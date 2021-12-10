const express = require('express');
const router = express.Router();
const Recipe = require('./model')

router.get('/:id', (req, res, next) => {
    
    Recipe.getRecipeById(req.params.id)
        .then( response => {
            // console.log('Get by ID: ', response) <<<<<<<<<<<<
            res.json({ message: response })
        })
        .catch(next) // <<<< Shortcut
    
})

router.get('*', (req, res) => {
    res.send('<h2>Wrong Path</h2>')    
})


module.exports = router;