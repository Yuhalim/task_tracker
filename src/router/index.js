import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home'
import About from '../views/about'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },

]

const router = createRouter({
    history: createWebHistory(process.env.
        BASE_URL),
    routes
})

export default router;