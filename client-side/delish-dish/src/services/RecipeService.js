import axios from 'axios';

export default {
    getRecipes() {
        return axios.get('recipe/recipes');
    },
    addRecipe(title, cookTime, serves, image, ingredients, steps) {
        return axios.post('recipe/create-recipe', { 
            title, 
            cookTime, 
            serves, 
            image, 
            ingredients, 
            steps 
        });
    }
}