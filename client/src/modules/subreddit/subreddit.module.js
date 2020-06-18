import subredditRoutes from 'subreddit/routes'
import subredditStore from 'subreddit/store'

export class SubredditModule {

    get name () {
        return 'subreddit'
    }

    constructor (router, store) {
        this.router = router
        this.store = store
    }

    install () {
        this.router.addRoutes(subredditRoutes)
        this.store.registerModule(this.name, subredditStore)
    }
}
