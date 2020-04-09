<template>
    <div class="create-recipe">
        <h1>Add a recipe</h1>
        <h5>(Please fill in the whole form to create a new recipe)</h5>
        <form @submit.prevent="submitRecipe(title, cookTime, serves, image, ingredients, steps)">
            <b-form-group>
                <b-form inline>
                    <label for="title">Title:</label>
                    <b-input v-model="title" @blur="$v.title.$touch" class="mb-2 mr-sm-2 mb-sm-0" id="title"></b-input>
                </b-form>
                <b-form inline>
                    <label for="cookTime">Cooking time:</label>
                    <b-input type="number" min="1" v-model="cookTime" @blur="$v.cookTime.$touch" class="mb-2 mr-sm-2 mb-sm-0" id="cookTime"></b-input><p>(minutes)</p>
                </b-form>
                <b-form inline>
                    <label for="serves">Serves:</label>
                    <b-input type="number" min="1" v-model="serves" @blur="$v.serves.$touch" class="mb-2 mr-sm-2 mb-sm-0" id="serves"></b-input><p>(dishes)</p>
                </b-form>
                <b-form inline>
                    <label for="image">Image:</label>
                    <b-input v-model="image" @blur="$v.image.$touch" class="mb-2 mr-sm-2 mb-sm-0" id="image"></b-input>
                </b-form>
                <b-form inline>
                    <label for="ingredients">Ingredients:</label>
                    <div class="ingredient d-flex" @blur="$v.ingredients.$touch" v-for="(ingredient, key) in ingredients" :key="key">
                        <div>
                            <b-input v-model="ingredient.ingredient" class="mb-2 mr-sm-2 mb-sm-0" id="ingredients"></b-input>
                        </div>
                        <span @click="removeIngredient(key)" v-show="key || (!key && ingredients.length > 1)"><font-awesome-icon :icon="['fas', 'minus-circle']" /></span>
                        <span @click="addIngredient(key)" v-show="key === ingredients.length-1"><font-awesome-icon :icon="['fas', 'plus-circle']" /></span>
                    </div>
                </b-form>
                <label for="steps" id="steps">Steps:</label>
                <b-form-textarea v-model="steps" @blur="$v.steps.$touch" class="mb-2 mr-sm-2 mb-sm-0" rows="5"></b-form-textarea>
            </b-form-group>
            <div class="buttons">
                <button :disabled="$v.$invalid">Submit</button>
                <router-link to="/home">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import RecipeService from '@/services/RecipeService';

export default {
    name: 'app-create-recipe',
    data() {
        return {
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
    },
    mixins: [validationMixin],
    validations:{ 
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
        ingredients: {
            required
        },
        steps: {
            required
        },
    },
    methods: {
        submitRecipe(title, cookTime, serves, image, ingredients, steps) {
            RecipeService.addRecipe(title, cookTime, serves, image, ingredients, steps)
            .then(() => { 
                this.$router.push('/home');
            }).catch((error) => { console.log(error);})
        },
        addIngredient() {
            this.ingredients.push({ ingredient: '' })
        },
        removeIngredient(index) {
            this.ingredients.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.create-recipe {
    width: 40em;
    margin: 0.5em auto;
    color: rgb(78, 73, 73);
}

h1 {
    margin-bottom: 0.6em;
    color: rgb(78, 73, 73);
}

h5 {
    margin: -0.9em 0 0.8em 3em;
}

label {
    width: 14em;
}

form:nth-child(5) {
    margin-top: -1em;
}

form:nth-child(5) > div:not(:nth-child(2)) {
    margin: -1.5em 0 0 20em;
}

p {
    margin: -2em 0 0 27em;
    font-size: 20px;
}

#ingredients {
    margin-top: 1em;
}

svg {
    margin: 1.25em 0 0 0;
    font-size: 20px;
}

svg:first-child {
    margin-left: 0.35em
}

.buttons {
    margin: 0 auto;
}
</style>