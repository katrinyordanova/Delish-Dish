<template>
  <div class="delete-recipe d-flex flex-column">
      <h1>Delete your recipe</h1>
      <form @submit.prevent="submitRecipe(recipe.title, recipe.cookTime, recipe.serves, recipe.image, recipe.ingredients, recipe.steps)">
            <b-form-group>
                <b-form inline>
                    <label for="title">Title:</label>
                    <b-input v-model="recipe.title" disabled id="title"></b-input>
                </b-form>
                <b-form inline>
                    <label for="cookTime">Cooking time:</label>
                    <b-input v-model="recipe.cookTime" disabled id="cookTime"></b-input><p>(minutes)</p>
                </b-form>
                <b-form inline>
                    <label for="serves">Serves:</label>
                    <b-input v-model="recipe.serves" disabled id="serves"></b-input><p>(dishes)</p>
                </b-form>
                <b-form inline>
                    <label for="image">Image:</label>
                    <b-input v-model="recipe.image" disabled id="image"></b-input>
                </b-form>
                <b-form inline>
                    <label for="ingredients">Ingredients:</label>
                    <div class="ingredient d-flex" v-for="(ingredient, key) in recipe.ingredients" :key="key">
                        <div>
                            <b-input v-model="ingredient.ingredient" disabled class="mb-2 mr-sm-2 mb-sm-0" id="ingredients"></b-input>
                        </div>
                    </div>
                </b-form>
                <label for="steps" id="steps">Steps:</label>
                <b-form-textarea v-model="recipe.steps" disabled rows="5"></b-form-textarea>
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
    name: 'app-delete-recipe',
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
        submitRecipe(title, cookTime, serves, image, ingredients, steps) {
            RecipeService.deleteRecipe(this.id, title, cookTime, serves, image, ingredients, steps)
            .then(() => { return this.$router.push('/home')})
            .catch((err) => { console.log(err); });
        }
    }
}
</script>

<style scoped>
@import '../../../shared/styles/userForm.css';

h1 {
    color: rgb(78, 73, 73);
}

input[type="text"], textarea.form-control {
    cursor: not-allowed;
    background-color: rgba(199, 183, 179, 0.493);
}

form:nth-child(5) > div:not(:nth-child(2)) {
    margin-left: 17.3em;
}
</style>