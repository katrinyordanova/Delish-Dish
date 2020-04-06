import Vue from 'vue';
import VueRouter from 'vue-router';

import GuestHomepage from '../components/GuestHomepage.vue';
import Register from '../components/authentication/Register.vue';
import Login from '../components/authentication/Login.vue';
import RecipeList from '../components/recipe/RecipeList.vue';
import RecipeDetail from '../components/recipe/DetailRecipe.vue';
import CreateRecipe from '../components/recipe/CreateRecipe.vue';
import EditRecipe from '../components/recipe/EditRecipe.vue';
import DeleteRecipe from '../components/recipe/DeleteRecipe.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

const routes = [
    { path: '/', component: GuestHomepage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/home', component: RecipeList},
    { path: '/home/:id', component: RecipeDetail },
    { path: '/home/add-recipe', component: CreateRecipe },
    { path: '/home/edit-recipe/:id', component: EditRecipe },
    { path: '/home/delete-recipe/:id', component: DeleteRecipe },
    { path: '*', component: NotFoundPage }
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})