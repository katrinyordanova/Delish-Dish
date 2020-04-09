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

            models.recipe.findById(id)
            .then((recipe) => res.send(recipe))
            .catch(next);
        }
    },
    post: (req, res, next)  => {
        const { title, cookTime, serves, image, ingredients, steps, userId } = req.body;

        models.recipe.create({ title, cookTime, serves, image, ingredients, steps, author: userId })
            .then((createdRecipe) => {
                return Promise.all([
                    models.user.updateOne({ _id: userId }, { $push: { recipes: createdRecipe }}),
                    models.recipe.findOne({ _id: createdRecipe._id })
                ]);
            }).then(([ modifiedObject, recipeObject ]) => {
                res.send(recipeObject)    })  
            .catch(next);
    },
    put: (req, res, next) => {
        const { title, cookTime, serves, image, ingredients, steps } = req.body;
        const id = req.params.id;

        models.recipe.updateOne({ _id: id}, { title, cookTime, serves, image, ingredients, steps })
        .then((updatedRecipe) => {
            res.send(updatedRecipe)
        }).catch(next);
    },
    delete: (req, res, next) => {
        const { title, cookTime, serves, image, ingredients, steps } = req.body;
        const id = req.params.id;

        models.recipe.deleteOne({ _id: id }, { title, cookTime, serves, image, ingredients, steps })
        .then((deletedRecipe) => {
            res.send(deletedRecipe);
        }).catch(next);
    }
}