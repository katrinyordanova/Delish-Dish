<template>
  <div class="recipe" @click="viewRecipe(id)">
    <img :src="image">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
    name: 'app-recipe',
    props: {
        id: String,
        title: String,
        image: String,
    },
    methods: {
        viewRecipe(id) {
            return this.$router.push('home/' + id);
        }
    }
}
</script>

<style scoped>
.recipe, img {
    margin: auto;
}

.recipe {
    width: 16.1em;
    height: auto;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px;
    margin: 2em;
}

img {
    width: 16em;
    height: 14em;
    border-radius: 10px 10px 0 0;
}

h5 {
    color: white
}
</style>