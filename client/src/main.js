import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { BootstrapVue } from 'bootstrap-vue'
import { RouterModule } from '@/modules/router'
import { StoreModule } from '@/modules/store'
import { CoreModule } from '@/modules/core'
import { HomeModule } from '@/modules/home'
import { AboutModule } from '@/modules/about'
import { SubredditModule } from '@/modules/subreddit'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueCompositionApi)

function bootstrap() {
    const routerModule = new RouterModule()
    routerModule.install(Vue)

    const storeModule = new StoreModule()
    storeModule.install(Vue)

    const coreModule = new CoreModule(routerModule.router, storeModule.store)
    coreModule.install(Vue)

    const homeModule = new HomeModule(routerModule.router, storeModule.store)
    homeModule.install(Vue)

    const aboutModule = new AboutModule(routerModule.router, storeModule.store)
    aboutModule.install(Vue)

    const subredditModule = new SubredditModule(routerModule.router, storeModule.store)
    subredditModule.install(Vue)

    coreModule.mount()
}

bootstrap()
