import 'pace-js';
import './App.css';
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

library.add([faAddressCard, faGithub, faArrowUpRightFromSquare]);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

const googleTrackingID = 'G-YXSV34DMHS';

document.head.appendChild(
    Object.assign(document.createElement('script'), {
        async: true,
        src: 'https://googletagmanager.com/gtag/js?id=' + googleTrackingID
    })
);

window.dataLayer ||= [];

gtag('js', new Date());
gtag('config', googleTrackingID);

function gtag() {
    dataLayer.push(arguments);
}
