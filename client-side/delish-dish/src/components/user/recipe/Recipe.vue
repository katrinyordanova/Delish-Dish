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
    border: 1px solid rgb(37, 36, 36);
    border-radius: 10px;
    margin: 1.7em auto 1em auto;
    color:rgb(66, 65, 65);
    background: rgb(203, 238, 78);
}

img {
    width: 16em;
    height: 14em;
    border-radius: 10px 10px 0 0;
}
</style>