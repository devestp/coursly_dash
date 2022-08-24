import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'
import { routesDef } from './routes';


const router = createRouter({
    history: createWebHistory(),
    routes: routesDef,
});

createApp(App).use(router).mount('#app')
