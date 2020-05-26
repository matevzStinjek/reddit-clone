import service from 'subreddit/services/subreddit.service'

export default {
    state: {
        navbarItems: service.getNavbarItems(),
        title: service.getTitle(),
    },
    getters: {
        getAllNavbarItems: state => state.navbarItems,
        getTitle: state => state.title,
    },
    mutations: {},
    actions: {},
}
