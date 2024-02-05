import 'pace-js';
import './App.css';
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAddressCard, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add([faAddressCard, faGithub, faArrowUpRightFromSquare]);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
