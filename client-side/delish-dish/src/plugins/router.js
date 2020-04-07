import Vue from 'vue';
import VueRouter from 'vue-router';

import GuestHomepage from '../components/GuestHomepage.vue';
import Register from '../components/authentication/Register.vue';
import Login from '../components/authentication/Login.vue';
import UserHomepage from '../components/recipe/UserPages.vue';
import RecipeList from '../components/recipe/RecipeList.vue';
import DetailRecipe from '../components/recipe/DetailRecipe.vue';
import CreateRecipe from '../components/recipe/CreateRecipe.vue';
import EditRecipe from '../components/recipe/EditRecipe.vue';
import DeleteRecipe from '../components/recipe/DeleteRecipe.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

const routes = [
    { path: '/', component: GuestHomepage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/home/', component: UserHomepage,
        children: [
            { path: '', component: RecipeList }, 
            { path: 'add-recipe', component: CreateRecipe },
            { path: ':id', component: DetailRecipe },
            { path: 'edit-recipe/:id', component: EditRecipe },
            { path: 'delete-recipe/:id', component: DeleteRecipe },
        ]
    },
    { path: '*', component: NotFoundPage }
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})