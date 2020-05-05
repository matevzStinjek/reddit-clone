import homeRoutes from 'home/routes'
import homeStore from 'home/store'

export class HomeModule {

    get name () {
        return 'home'
    }

    constructor (storeModule, routerModule) {
        this.storeModule = storeModule
        this.routerModule = routerModule
    }

    install () {
        this.routerModule.addRoutes(homeRoutes)
        this.storeModule.registerModule(homeStore, this.name)
    }
}
