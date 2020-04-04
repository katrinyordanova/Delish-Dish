const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utilities');

router.get('/recipes', auth(), controllers.recipe.get.many);
router.get('/:id', auth(), controllers.recipe.get.one);
router.post('/create-recipe', controllers.recipe.post);
router.put('/edit-recipe/:id', auth(), controllers.recipe.put);
router.delete('/delete-recipe/:id', auth(), controllers.recipe.delete);

module.exports = router;