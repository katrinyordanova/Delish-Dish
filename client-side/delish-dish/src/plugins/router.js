import Vue from 'vue';
import VueRouter from 'vue-router';

import GuestPages from '../components/guest/GuestPages.vue';
import GuestHomepage from '../components/guest/GuestHomepage.vue';
import Register from '../components/guest/authentication/Register.vue';
import Login from '../components/guest/authentication/Login.vue';
import UserHomepage from '../components/user/recipe/UserPages.vue';
import RecipeList from '../components/user/recipe/RecipeList.vue';
import DetailRecipe from '../components/user/recipe/DetailRecipe.vue';
import CreateRecipe from '../components/user/recipe/CreateRecipe.vue';
import EditRecipe from '../components/user/recipe/EditRecipe.vue';
import DeleteRecipe from '../components/user/recipe/DeleteRecipe.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

const routes = [
    { path: '/', component: GuestPages,
        children: [
            { path: '', component:  GuestHomepage,},
            { path: 'register', component: Register },
            { path: 'login', component: Login },
        ] 
    },
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