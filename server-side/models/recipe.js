const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String
    },
    cookTime: {
        type: String
    },
    serves: {
        type: String
    },
    image: {
        type: Buffer
    },
    ingredients: [ 
        {
            ingredient: String
        }
    ],
    steps: {
        type: String
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);