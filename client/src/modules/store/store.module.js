import Vuex from 'vuex'
import coreStore from 'core/store'

export class StoreModule {

    get name () {
        return 'store'
    }

    install (Vue) {
        Vue.use(Vuex)

        this.store = new Vuex.Store(coreStore)
    }
}
