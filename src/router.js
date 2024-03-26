import { createRouter, createWebHistory } from "vue-router";

import HomePage from './views/HomePage.vue'
import LessonsPage from './views/LessonsPage.vue'
import BookingPage from './views/BookingPage.vue'
import ContactPage from './views/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/lessons',
        name: 'Lessons',
        component: LessonsPage,
    },
    {
        path: '/booking',
        name: 'Booking',
        component: BookingPage,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage,
    }
]

const router  = createRouter({
    history: createWebHistory(),
    routes
})

export default router;