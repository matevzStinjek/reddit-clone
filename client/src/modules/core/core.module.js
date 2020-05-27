import App from 'core/components/App.vue'

export class CoreModule {

    get name () {
        return 'core'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install (Vue) {
        this.vm = new Vue({
            router: this.router,
            store: this.store,
            render: h => h(App),
        })
    }

    mount () {
        this.vm.$mount('#app')
    }
}
