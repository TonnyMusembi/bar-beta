/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue";
import Login from '../views/login.vue'

const routes = [{ path: '', name: 'login', component: Login },
    // {
    //     path: "/about",
    //     name: "About",

    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;