import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { RouterModule } from '@/modules/router'
import { StoreModule } from '@/modules/store'
import { CoreModule } from '@/modules/core'
import { SubredditModule } from '@/modules/subreddit'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueCompositionApi)

function bootstrap () {
    const routerModule = new RouterModule()
    routerModule.install(Vue)

    const storeModule = new StoreModule()
    storeModule.install(Vue)

    const coreModule = new CoreModule(routerModule.router, storeModule.store)
    coreModule.install(Vue)

    const subredditModule = new SubredditModule(routerModule.router, storeModule.store)
    subredditModule.install(Vue)

    coreModule.mount()
}

bootstrap()
