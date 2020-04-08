import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: () => import ('@/components/guest/GuestPages'),
        children: [
            { path: '', component: () => import('@/components/guest/GuestHomepage')},
            { path: 'register', component: () => import('@/components/guest/authentication/Register') },
            { path: 'login', component: () => import('@/components/guest/authentication/Login') },
        ] 
    },
    { path: '/home/', component: () => import ('@/components/user/recipe/UserPages'),
        children: [
            { path: '', component: () => import ('@/components/user/recipe/RecipeList') }, 
            { path: 'add-recipe', component: () => import ('@/components/user/recipe/CreateRecipe') },
            { path: ':id', component: () => import ('@/components/user/recipe/DetailRecipe') },
            { path: 'edit-recipe/:id', component: () => import ('@/components/user/recipe/EditRecipe') },
            { path: 'delete-recipe/:id', component: () => import ('@/components/user/recipe/DeleteRecipe') },
        ]
    },
    { path: '*', component: ()  => import ('@/components/NotFoundPage') }
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
})