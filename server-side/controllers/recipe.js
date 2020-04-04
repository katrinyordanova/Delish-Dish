const models = require('../models');

module.exports = {
    get: {
        many: (req, res, next) => {
                models.recipe.find()
                .then((recipes) => res.send(recipes)
            ).catch(next);
        },
        one: (req, res, next) => {
            const id = req.params.id;
        
            models.recipe.findOne(id)
            .then((recipe) => res.send(recipe))
            .catch(next);
        }
    },
    post: (req, res, next)  => {
        const { title, cookTime, serves, image, ingredients, steps } = req.body;     
        models.recipe.create({ title, cookTime, serves, image, ingredients, steps})
            .then((createdRecipe) => {
                res.send(createdRecipe);
            })
            .catch(next);
    },
    put: (req, res, next) => {
        const { title, description } = req.body;
        const id = req.params.id;

        models.recipe.updateOne({ _id: id}, { title, description }).then((updatedRecipe) => {
            res.send(updatedRecipe)
        }).catch(next);
    },
    delete: (req, res, next) => {
        const { title, description } = req.body;
        const id = req.params.id;

        models.recipe.deleteOne({ _id: id }, { title, description })
        .then((deletedRecipe) => {
            res.send(deletedRecipe);
        }).catch(next);
    }
}