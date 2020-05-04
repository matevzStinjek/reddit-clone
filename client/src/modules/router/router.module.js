import { createRouter, createWebHistory } from 'vue-router'

export class RouterModule {

    get name () {
        return 'router'
    }

    install () {
        this.router = createRouter({
            history: createWebHistory(process.env.BASE_URL),
            routes: [],
        })
    }

    addRoutes (routes) {
        routes.forEach(route => {
            this.router.addRoute(route)
        })
    }
}
