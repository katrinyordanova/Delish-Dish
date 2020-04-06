<template>
    <div class="recipe-list d-flex flex-column justify-content-center">
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
    margin-top: 0.5em;
    max-width: 88%
}

div.container {
    cursor: pointer;
}

div.row {
    width: 80.4em;
    margin: 0;
}
</style>