import Router from 'vue-router'

export class RouterModule {

    get name () {
        return 'router'
    }

    install (Vue) {
        Vue.use(Router)

        this.router = new Router({
            mode: 'history',
            base: process.env.BASE_URL,
        })
    }
}
