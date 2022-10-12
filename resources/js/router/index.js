import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import('@/components/layouts/Default.vue')
const StartLayout = () => import('@/components/layouts/StartDefault.vue')
const Contact = () => import('@/components/layouts/Contact.vue')
const Blog = () => import('@/components/layouts/Blog.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')
/* Authenticated Component */


const routes = [
    {
        name: "start",
        path: "/start",
        component: StartLayout,
        meta: {
            middleware: "guest",
            title: `Start`
        }
    },
    {
        name: "contact",
        path: "/contact",
        component: Contact,
        meta: {
            middleware: "guest",
            title: `Contact`
        }
    },
    {
        name: "blog",
        path: "/blog",
        component: Contact,
        meta: {
            middleware: "guest",
            title: `Blog`
        }
    },
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        path: "/",
        component: DahboardLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "start" })
        }
    }
})

export default router