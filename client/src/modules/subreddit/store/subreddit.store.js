import service from 'subreddit/services/subreddit.service'
import constants from './constants.json'

export default {
    state: {
        title: '',
    },
    getters: {
        getAllNavbarItems: () => constants.navbarOptions,
        getTitle: state => state.title,
    },
    mutations: {
        fetchTitle: (state, data) => state.title = data,
    },
    actions: {
        async fetchTitle ({ commit }) {
            const title = await service.getTitle()
            commit('fetchTitle', title)
        },
    },
}
