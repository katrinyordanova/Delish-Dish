<template>
  <div class="recipe">
    <img :src="recipe.image" alt="recipe-image">
    <h1>Title: {{recipe.title}}</h1>
    <h1>Cooking time: {{recipe.cookTime}}</h1>
    <h1>Serves: {{recipe.serves}}</h1>
    <h1>Steps: {{recipe.steps}}</h1>
    <h1>Ingredients:</h1>
    <h1 v-for="value in recipe.ingredients"
        :key="value._id"
        :ingredient="value.ingredient">{{value.ingredient}}
    </h1>
    <div class="buttons">
      <button @click="editRecipe">Edit</button>
      <button @click="deleteRecipe">Delete</button>
      <router-link to="/home">Go home</router-link>
    </div>
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService';
export default {
  name: 'app-recipe-detail',
  data() {
    return {
      recipe: null,
      id: this.$route.params.id
    }
  },
  methods: {
    editRecipe() {
      return this.$router.push('/home/edit-recipe/' + this.id);
    },
    deleteRecipe() {
      return this.$router.push('/home/delete-recipe/' + this.id);
    }
  },
  created() {
    RecipeService.getRecipe(this.id)
    .then((res) => { this.recipe = res.data })
    .catch((error) => { console.log(error);})
  }
}
</script>

<style scoped>
.recipe {
  margin: 1em auto;
  color: rgb(255, 255, 255);
}

img {
  height: 20em;
}

button, a {
  border: 1px solid rgb(255, 123, 0);
  background-color: rgb(255, 123, 0);
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