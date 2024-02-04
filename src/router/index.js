import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: async () => await HomeView
        },
        {
            path: '/about',
            component: async () => await AboutView
        },
        {
            path: '/contact',
            component: async () => await ContactView
        }
    ]
});
