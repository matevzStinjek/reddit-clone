import service from 'core/services/core.service.js'
import constants from './constants.json'

export default {
    state: {
        subreddits: [],
    },
    getters: {
        allSubreddits: state => state.subreddits,
        allProfileOptions: () => constants.profileOptions,
    },
    mutations: {
        fetchSubreddits: (state, data) => state.subreddits = data,
    },
    actions: {
        initialise ({ dispatch }) {
            dispatch('fetchSubreddits')
        },

        async fetchSubreddits ({ commit }) {
            const data = await service.fetchSubreddits()
            commit('fetchSubreddits', data)
        },
    },
}
