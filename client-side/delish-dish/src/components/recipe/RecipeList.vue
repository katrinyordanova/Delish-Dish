<template>
    <div class="recipe-list">
        <h1>Recipies</h1>
        <b-container>
            <b-row>
                <Recipe v-for="recipe in recipes" 
                    :id="recipe._id"
                    :key="recipe._id"
                    :title="recipe.title"
                    :image="recipe.image">
                </Recipe>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import RecipeService from '@/services/RecipeService';
import Recipe from './Recipe.vue';

export default {
    name: 'app-recipe-list',
    data() {
        return {
            recipes: null
        }
    },
    created() {
        RecipeService.getRecipes()
        .then((res) => { this.recipes = res.data; })
        .catch((err) => { console.log(err); })
    },
    components: {
        Recipe
    }
}
</script>

<style scoped>
div.recipe-list {
    max-width: 88%
}

h1 {
    margin: 0.5em auto 0 3em;
}

div.row {
    width: 80.4em;
    margin: 0;
}
</style>