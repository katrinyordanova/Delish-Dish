const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utilities');

router.get('/recipes', controllers.recipe.get.many);
router.get('/:id', controllers.recipe.get.one);
router.post('/create-recipe', controllers.recipe.post);
router.put('/edit-recipe/:id', controllers.recipe.put);
router.delete('/delete-recipe/:id', controllers.recipe.delete);

module.exports = router;