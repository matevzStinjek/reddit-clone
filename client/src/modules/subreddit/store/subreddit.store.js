import service from 'subreddit/services/subreddit.service'
import constants from './constants.json'

export default {
    state: {
        title: null,
    },
    getters: {
        navbarItems: () => constants.navbarOptions,
        title: state => state.title,
    },
    mutations: {
        SET_TITLE: (state, data) => state.title = data,
    },
    actions: {
        initialise ({ dispatch }) {
            dispatch('fetchTitle')
        },
        async fetchTitle ({ commit }) {
            const title = await service.getTitle()
            commit('SET_TITLE', title)
        },
    },
}
