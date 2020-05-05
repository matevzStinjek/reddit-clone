import sharedStore from 'shared/store'

export class SharedModule {

    get name () {
        return 'shared'
    }

    constructor (storeModule) {
        this.storeModule = storeModule
    }

    install () {
        this.storeModule.registerModule(sharedStore)
    }
}
