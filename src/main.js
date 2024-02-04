import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBuilding, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add([faBuilding, faPhone]);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
