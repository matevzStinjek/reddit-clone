import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueCompositionApi from '@vue/composition-api'
import helpers from './helpers'

export class DependencyInjector {

    get name () {
        return 'dependency-injector'
    }

    install (Vue) {
        Vue.use(BootstrapVue)
        Vue.use(BootstrapVueIcons)
        Vue.use(VueCompositionApi)

        helpers.install(Vue)
    }
}
