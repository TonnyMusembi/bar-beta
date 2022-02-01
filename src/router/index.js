/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue";
import Login from '../views/login.vue'
import Verify from '../views/verify.vue'

const routes = [{ path: '', name: 'login', component: Login },

    {
        path: '/verify',
        name: 'Verify',
        component: Verify
    },
    // {
    //     path: '/Sidebar',
    //     component: () =>
    //         import ( /* webpackChunkName: "Messages" */ '../components/Sidebar.vue')
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;