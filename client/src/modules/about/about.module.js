import aboutRoutes from 'about/routes'
import aboutStore from 'about/store'

export class AboutModule {

    get name () {
        return 'about'
    }

    constructor (storeModule, routerModule) {
        this.storeModule = storeModule
        this.routerModule = routerModule
    }

    install () {
        this.routerModule.addRoutes(aboutRoutes)
        this.storeModule.registerModule(aboutStore, this.name)
    }
}
