import 'pace-js';
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add([faBuilding, faPhone, faGithub]);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
