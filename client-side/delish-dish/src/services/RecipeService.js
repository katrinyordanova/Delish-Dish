import axios from 'axios';
const baseUrl = 'recipe/';

export default {
    getRecipe(id) {
        return axios.get(baseUrl + id);
    },
    getRecipes() {
        return axios.get(baseUrl + 'recipes');
    },
    addRecipe(title, cookTime, serves, image, ingredients, steps) {
        return axios.post(baseUrl + 'create-recipe', { 
            title, 
            cookTime, 
            serves, 
            image, 
            ingredients, 
            steps 
        });
    },
    editRecipe(id, title, cookTime, serves, image, ingredients, steps ) {
        return axios.put(baseUrl + 'edit-recipe/' + id, {
            title, 
            cookTime, 
            serves, 
            image, 
            ingredients, 
            steps 
        });
    }
}