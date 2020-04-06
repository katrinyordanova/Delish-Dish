<template>
  <div class="edit-recipe d-flex flex-column">
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

span {
    margin-bottom: 2em;
}

svg {
    color:rgb(83, 18, 0);
    margin-top: 0.5em;
    font-size: 20px;
}

svg:first-child {
    margin-left: 0.3em
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