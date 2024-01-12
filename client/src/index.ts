import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import {router} from '@/router';
import { vuetify } from './plugins/vuetify';
import '@/assets/main.scss'

const app = createApp(App);
const store = createPinia();

app.use(vuetify);
app.use(router);
app.use(store);
app.mount('#root');