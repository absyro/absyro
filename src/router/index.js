import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => HomeView
        },
        {
            path: '/about',
            component: () => AboutView
        },
        {
            path: '/contact',
            component: () => ContactView
        }
    ]
});
