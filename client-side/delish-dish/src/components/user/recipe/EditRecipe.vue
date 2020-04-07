<template>
  <div class="edit-recipe d-flex flex-column">
      <h1>Edit your recipe</h1>
      <form @submit.prevent="submitRecipe(recipe.title, recipe.cookTime, recipe.serves, recipe.image, recipe.ingredients, recipe.steps)">
            <b-form-group>
                <b-form inline>
                    <label for="title">Title:</label>
                    <b-input v-model="recipe.title" @input="$v.title.$touch" id="title"></b-input>
                </b-form>
                <template v-if="$v.title.$error">
                    <div class="validation" v-if="!$v.title.required">Title is required</div>
                </template>
                <b-form inline>
                    <label for="cookTime">Cooking time:</label>
                    <b-input type="number" min="1" v-model="recipe.cookTime" @blur="$v.cookTime.$touch" id="cookTime"></b-input><p>(minutes)</p>
                </b-form>
                <template v-if="$v.cookTime.$error">
                    <div class="validation" v-if="!$v.cookTime.required">Cooking time is required</div>
                </template>
                <b-form inline>
                    <label for="serves">Serves:</label>
                    <b-input type="number" min="1" v-model="recipe.serves" @blur="$v.serves.$touch" id="serves"></b-input><p>(dishes)</p>
                </b-form>
                <template v-if="$v.serves.$error">
                    <div class="validation" v-if="!$v.serves.required">Serves is required</div>
                </template>
                <b-form inline>
                    <label for="image">Image:</label>
                    <b-input v-model="recipe.image" @blur="$v.image.$touch" id="image"></b-input>
                </b-form>
                <template v-if="$v.image.$error">
                    <div class="validation" v-if="!$v.image.required">Image is required</div>
                </template>
                <b-form inline>
                    <label for="ingredients">Ingredients:</label>
                    <div class="ingredient d-flex" v-for="(ingredient, key) in recipe.ingredients" :key="key">
                        <div>
                            <b-input v-model="ingredient.ingredient" @blur="$v.ingredient.$touch" class="mb-2 mr-sm-2 mb-sm-0" id="ingredients"></b-input>
                        </div>
                        <span @click="removeIngredient(key)" v-show="key || (!key && recipe.ingredients.length > 1)"><font-awesome-icon :icon="['fas', 'minus-circle']" /></span>
                        <span @click="addIngredient(key)" v-show="key === recipe.ingredients.length-1"><font-awesome-icon :icon="['fas', 'plus-circle']" /></span>
                    </div>
                </b-form>
                <template v-if="$v.ingredient.$error">
                    <div class="validation" v-if="!$v.ingredient.required">Ingredients are required</div>
                </template>
                <label for="steps" id="steps">Steps:</label>
                <b-form-textarea v-model="recipe.steps" @blur="$v.steps.$touch" rows="5"></b-form-textarea>
                <template v-if="$v.steps.$error">
                    <div class="validation" id="last-validation" v-if="!$v.steps.required">Steps is required</div>
                </template>
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
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
    name: 'app-edit-recipe',
    data() {
        return {
            recipe: 
                    [
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
    mixins: [validationMixin],
    validations: { 
        title: {
            required,
        },
        image: {
            required
        },
        cookTime: {
            required
        },
        serves: {
            required
        },
        ingredient: {
            required
        },
        steps: {
            required
        },
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
            if(title, cookTime, serves, image, ingredients, steps) {
                RecipeService.editRecipe(this.id, title, cookTime, serves, image, ingredients, steps)
                .then(() => { return this.$router.push('/home')})
                .catch((err) => { console.log(err); });
            }
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

.validation {
    width: 18em;
    background-color: rgb(230, 107, 76);
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.85);
    border-radius: 5px;
    font-size: 20px;
    margin: 0 auto 1em auto;
    color:rgb(255, 255, 255);
}

#last-validation {
    margin-top: 1em;
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