<template>
  <div>
      <h1>Edit your recipe</h1>
      <form @submit.prevent="submitRecipe(recipe.title, recipe.cookTime, recipe.serves, recipe.image, recipe.ingredients, recipe.steps)">
            <b-form-group>
                <b-form inline>
                    <label for="title">Title:</label>
                    <b-input v-model="recipe.title" id="title"></b-input>
                </b-form>
                <b-form inline>
                    <label for="cookTime">Cooking time:</label>
                    <b-input v-model="recipe.cookTime" id="cookTime"></b-input><p>(minutes)</p>
                </b-form>
                <b-form inline>
                    <label for="serves">Serves:</label>
                    <b-input v-model="recipe.serves" id="serves"></b-input><p>(dishes)</p>
                </b-form>
                <b-form inline>
                    <label for="image">Image:</label>
                    <b-input v-model="recipe.image" id="image"></b-input>
                </b-form>
                <b-form inline>
                    <label for="ingredients">Ingredients:</label>
                    <div class="ingredient d-flex" v-for="(ingredient, key) in recipe.ingredients" :key="key">
                        <div>
                            <b-input v-model="ingredient.ingredient" class="mb-2 mr-sm-2 mb-sm-0" id="ingredients"></b-input>
                        </div>
                        <span @click="removeIngredient(key)" v-show="key || (!key && recipe.ingredients.length > 1)"><font-awesome-icon :icon="['fas', 'minus-circle']" /></span>
                        <span @click="addIngredient(key)" v-show="key === recipe.ingredients.length-1"><font-awesome-icon :icon="['fas', 'plus-circle']" /></span>
                    </div>
                </b-form>
                <label for="steps" id="steps">Steps:</label>
                <b-form-textarea v-model="recipe.steps" rows="5"></b-form-textarea>
            </b-form-group> 
            <div class="buttons">
                <button>Submit</button>
                <router-link to="/home">Go home</router-link>
            </div>
        </form>
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService';

export default {
    name: 'app-edit-recipe',
    data() {
        return {
            recipe: [
                {
                    title: '',
                    cookTime: '',
                    serves: '',
                    image: '',
                    ingredients: [
                        {
                            ingredient: ''
                        }
                    ],
                    steps: ''
                }
                    ],
            id: this.$route.params.id
        }
    },
    created() {
        RecipeService.getRecipe(this.id)
        .then((res) => { this.recipe = res.data})
        .catch((err) => { console.log(err); })
    },
    methods: {
        addIngredient() {
            this.recipe.ingredients.push({ ingredient: '' });
        },
        removeIngredient(index) {
            this.recipe.ingredients.splice(index, 1);
        },
        submitRecipe(title, cookTime, serves, image, ingredients, steps) {
            RecipeService.editRecipe(this.id, title, cookTime, serves, image, ingredients, steps)
            .then(() => { return this.$router.push('/home')})
            .catch((err) => { console.log(err); });
        }
    }
}
</script>

<style scoped>
form {
    color: white;
}
</style>