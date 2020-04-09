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
        type: String
    },
    ingredients: [ 
        {
            ingredient: String
        }
    ],
    steps: {
        type: String
    },
    author: [{ type: mongoose.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Recipe', recipeSchema);