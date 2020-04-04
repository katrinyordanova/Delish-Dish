import GuestHomepage from './components/GuestHomepage.vue';
import Register from '../components/authentication/Register.vue';
import Login from '../components/authentication/Login.vue';
import CreateRecipe from './components/recipe/CreateRecipe.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

export default [
    { path: '/', component: GuestHomepage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/home/add-recipe', component: CreateRecipe},
    { path: '*', component: NotFoundPage }
]