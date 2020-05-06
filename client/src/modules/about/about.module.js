import aboutRoutes from 'about/routes'
import aboutStore from 'about/store'

export class AboutModule {

    get name () {
        return 'about'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install () {
        this.router.addRoutes(aboutRoutes)
        this.store.registerModule(this.name, aboutStore)
    }
}
