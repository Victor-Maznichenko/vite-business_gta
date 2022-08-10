import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favourites from '../views/Favourites.vue'
import Compare from '../views/Compare.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home
    },
    {
        path: '/favourites/',
        name: 'FavouritesPage',
        component: Favourites
    },
    {
        path: '/compare/',
        name: 'ComparePage',
        component: Compare
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router