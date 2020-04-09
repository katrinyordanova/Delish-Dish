<template>
  <div class="recipe">
    <img :src="recipe.image" alt="recipe-image">
    <div class="recipe-content">
      <h1>{{recipe.title}}</h1>
      <h3>{{recipe.cookTime}} minutes to cook</h3>
      <h3>{{recipe.serves}} serves</h3>
      <h2>Ingredients:</h2>
      <h3 v-for="value in recipe.ingredients"
          :key="value._id"
          :ingredient="value.ingredient">{{value.ingredient}}
      </h3>
      <h2>Steps:</h2>
      <h3>{{recipe.steps}}</h3>
    </div>
    <div class="buttons">
      <template v-if="this.isAuthor">
        <button @click="editRecipe">Edit</button>
        <button @click="deleteRecipe">Delete</button>
      </template>
      <router-link to="/home" class="home-button">Go home</router-link>
    </div>
  </div>
</template>

<script>
import RecipeService from '@/services/RecipeService';
export default {
  name: 'app-recipe-detail',
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
      id: this.$route.params.id,
      isAuthor: false
    }
  },
  methods: {
    editRecipe() {
      return this.$router.push({ path: `/home/edit-recipe/${this.id}` });
    },
    deleteRecipe() {
      return this.$router.push({ path: `/home/delete-recipe/${this.id}` });
    }
  },
  created() {
    RecipeService.getRecipe(this.id)
    .then((res) => {
      const recipeAuthor = res.data.author.toString();
      const currentUser = localStorage.getItem('user');

      if(recipeAuthor === currentUser) {
        localStorage.setItem('isAuthor', true);
        this.isAuthor = true;
      }else {
        localStorage.setItem('isAuthor', false);
        this.isAuthor = false;
      }

      this.recipe = res.data; 
    }).catch((error) => { console.log(error); })
  }
}
</script>

<style scoped>
@import '../../../shared/styles/userForm.css';

.recipe, h1, h2, h3 {
  color:rgb(78, 73, 73);
}
.recipe {
  margin: 0.7em auto;
}

img {
  height: 20em;
  width: 27em;
  border-radius: 10px;
}

.recipe-content {
  margin: 0 auto;
  width: 27em;
  height: auto;
  background-color: rgb(190, 226, 60);
  border-radius: 10px;
}

h1 {
  margin: 0.3em 0 0 0;
  padding-top: 0.2em;
}

div.recipe-content > h3:nth-child(7) {
  padding-bottom: 0.4em;
}

.buttons {
  margin: 0 auto;
}

button,
button:hover,
a {
  border: 1px solid rgb(190, 226, 60);
  background-color: rgb(190, 226, 60);
}
</style>