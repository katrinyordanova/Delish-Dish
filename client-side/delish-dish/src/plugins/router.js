import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
        { path: '/', component: () => import ('@/components/guest/GuestPages'),
            children: [
                { path: '', component: () => import('@/components/guest/GuestHomepage'), meta: { unauthenticated: true }},
                { path: 'register', component: () => import('@/components/guest/authentication/Register'), meta: { unauthenticated: true } },
                { path: 'login', component: () => import('@/components/guest/authentication/Login'), meta: { unauthenticated: true } }
            ] 
        },
        { path: '/home/', component: () => import ('@/components/user/recipe/UserPages'),
            children: [
                { path: '', component: () => import ('@/components/user/recipe/RecipeList'), meta: { authenticated: true }}, 
                { path: 'add-recipe', component: () => import ('@/components/user/recipe/CreateRecipe'), meta: { authenticated: true }},
                { path: ':id', component: () => import ('@/components/user/recipe/DetailRecipe'), meta: { authenticated: true }},
                { path: 'edit-recipe/:id', component: () => import ('@/components/user/recipe/EditRecipe'), meta: { authenticated: true }},
                { path: 'delete-recipe/:id', component: () => import ('@/components/user/recipe/DeleteRecipe'), meta: { authenticated: true }}
            ]
        },
        { path: '*', component: ()  => import ('@/components/NotFoundPage') }
    ]

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes
})