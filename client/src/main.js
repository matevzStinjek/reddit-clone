import { RouterModule } from '@/modules/router'
import { StoreModule } from '@/modules/store'
import { CoreModule } from '@/modules/core'
import { SharedModule } from './modules/shared'
import { HomeModule } from './modules/home'
import { AboutModule } from './modules/about'

function bootstrap () {
    const routerModule = new RouterModule()
    routerModule.install()

    const storeModule = new StoreModule()
    storeModule.install()

    const coreModule = new CoreModule(storeModule, routerModule)
    coreModule.install()

    const sharedModule = new SharedModule(storeModule)
    sharedModule.install()

    const homeModule = new HomeModule(storeModule, routerModule)
    homeModule.install()

    const aboutModule = new AboutModule(storeModule, routerModule)
    aboutModule.install()

    coreModule.mount()
}

bootstrap()
