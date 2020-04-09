import axios from 'axios';
const baseUrl = 'recipe/';
const userId = localStorage.getItem('user');

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
            steps,
            userId
        });
    },
    editRecipe(id, title, cookTime, serves, image, ingredients, steps) {
        return axios.put(baseUrl + 'edit-recipe/' + id, {
            title, 
            cookTime, 
            serves, 
            image, 
            ingredients, 
            steps
        });
    },
    deleteRecipe(id, title, cookTime, serves, image, ingredients, steps) {
        return axios.delete(baseUrl + 'delete-recipe/' + id, {
            title, 
            cookTime, 
            serves, 
            image, 
            ingredients, 
            steps
        });
    }
}