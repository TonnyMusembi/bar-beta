/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue";
import Login from '../views/login.vue'
import Sidebar from '../components/Sidebar.vue'

const routes = [{ path: '', name: 'login', component: Login },

    {
        path: '',
        name: 'sidebar',
        component: Sidebar
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;