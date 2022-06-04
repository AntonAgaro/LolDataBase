import Main from "../pages/Main.vue";
import Champions from "../pages/Champions.vue";
import Items from "../pages/Items.vue";
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import ChampionPage from "../pages/ChampionPage.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/champions',
        component: Champions
    },
    {
        path: '/items',
        component: Items
    },
    {
        path: '/champions/:id',
        name: 'champion',
        component: ChampionPage
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});