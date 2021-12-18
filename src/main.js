import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import axios from 'axios'

const app = createApp(App)

// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://castello.crazyideaco.com/api';
app.config.globalProperties.axios=axios

app.use(router);
app.use(store);
app.mount('#app');
