import Vue from 'vue'
import { DependencyInjector } from '@/dependencies'
import { RouterModule } from '@/modules/router'
import { StoreModule } from '@/modules/store'
import { CoreModule } from '@/modules/core'
import { HomeModule } from '@/modules/home'

Vue.config.productionTip = false

function bootstrap () {
    const dependencyInjector = new DependencyInjector()
    dependencyInjector.install(Vue)

    const routerModule = new RouterModule()
    routerModule.install(Vue)

    const storeModule = new StoreModule()
    storeModule.install(Vue)

    const coreModule = new CoreModule(routerModule.router, storeModule.store)
    coreModule.install(Vue)

    const homeModule = new HomeModule(routerModule.router, storeModule.store)
    homeModule.install(Vue)

    coreModule.mount()
}

bootstrap()
