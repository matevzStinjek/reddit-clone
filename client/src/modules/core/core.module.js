import { createApp } from 'vue'
import App from './components/App.vue'

export class CoreModule {

    get name () {
        return 'core'
    }

    constructor (storeModule, routerModule) {
        this.store = storeModule.store
        this.router = routerModule.router
    }

    install () {
        this.vm = createApp(App)
            .use(this.router)
            .use(this.store)
    }

    mount () {
        this.vm.mount('#app')
    }
}
