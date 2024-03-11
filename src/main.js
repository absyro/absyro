import { faAddressCard, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './App.css';
import 'pace-js';

library.add([faAddressCard, faGithub, faArrowUpRightFromSquare]);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
