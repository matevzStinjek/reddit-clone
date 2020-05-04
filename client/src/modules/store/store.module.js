import Vuex from 'vuex'

export class StoreModule {

    get name () {
        return 'store'
    }

    install () {
        this.store = Vuex.createStore()
    }

    registerModule (module, name = '') {
        this.store.registerModule([name], module)
    }
}
