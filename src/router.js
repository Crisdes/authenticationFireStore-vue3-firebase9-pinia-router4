import {createRouter, createWebHistory} from 'vue-router'
import { useUserStore } from './stores/user'

// createWebHistory: Como es una SPA se coloca createWebHistory para al momento de 
// hacer las rutas no coloque el #
// SPA. todo se rederiza en index.html

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

// Verifica que el usuario exista
const requireAuth = async (to, from, next) => {
    const userStore = useUserStore()
    userStore.loadingSession = true
    const user = await userStore.currentUser()
    if (user) {
        next()
    }else{
        next('/login')
    }
    userStore.loadingSession = false
}

const routes = [
    {path: '/', component: Home, beforeEnter: requireAuth},
    {path: '/login', component: Login},
    {path: '/register', component: Register}
]

const router = createRouter ({
    routes,
    history: createWebHistory()
})

export default router