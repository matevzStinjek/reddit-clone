import homeRoutes from 'home/routes'
import homeStore from 'home/store'

export class HomeModule {

    get name () {
        return 'home'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install () {
        this.router.addRoutes(homeRoutes)
        this.store.registerModule(this.name, homeStore)
    }
}
