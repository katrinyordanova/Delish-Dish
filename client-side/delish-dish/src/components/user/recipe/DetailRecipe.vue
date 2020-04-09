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
.recipe {
  margin: 1em auto;
  color:rgb(78, 73, 73);
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
  margin-top: 0.2em;
}

button, a {
  border: 1px solid rgb(190, 226, 60);
  background-color: rgb(190, 226, 60);
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