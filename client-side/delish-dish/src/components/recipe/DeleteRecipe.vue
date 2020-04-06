<template>
  <div class="edit-recipe d-flex flex-column">
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
input[type="text"], textarea.form-control {
    cursor: not-allowed;
    background-color: rgba(199, 183, 179, 0.493);
}

.edit-recipe {
    margin: 0.5em;
}

h1, form {
    color: rgb(78, 73, 73);
}

h1 {
    margin: 0.3em 0 0.4em 0;
}

form {
    margin: 0 auto;
    width: 35em;
    color: rgb(78, 73, 73);
}

label, a, span {
    cursor: pointer;
}

 label {
    width: 12em;
    font-size: 23px;
}

form:nth-child(5) > div:not(:nth-child(2)) {
    margin-left: 17.3em;
}

form.form-inline {
    margin-bottom: 1.3em;
}

p {
    margin: 0 0.3em;
    font-size: 17px;
    cursor: default;
}

#steps {
    font-size: 25px;
    margin: -1em 0 0.3em 1em;
}

textarea {
    width: 35em;
    margin: 0 auto;
}

button, a {
    border: 1px solid rgb(203, 238, 78);
    background-color: rgb(203, 238, 78);
    font-size: 21px;
    padding: 0.5em 0.4em;
    border-radius: 5px;
    color: rgb(255, 255, 255)
}

button {
    margin-right: 0.9em;
}

a {
    padding: 0.6em 0.4em; 
}

button:disabled {
    cursor: not-allowed;
}

a:hover {
    text-decoration: none;
}
</style>