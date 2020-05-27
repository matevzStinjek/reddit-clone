import service from 'core/services/core.service.js'
import constants from './constants.json'

export default {
    state: {
        subreddits: [],
    },
    getters: {
        subreddits: state => state.subreddits,
        profileOptions: () => constants.profileOptions,
    },
    mutations: {
        SET_SUBREDDITS: (state, data) => state.subreddits = data,
    },
    actions: {
        initialise ({ dispatch }) {
            dispatch('fetchSubreddits')
        },
        async fetchSubreddits ({ commit }) {
            const data = await service.fetchSubreddits()
            commit('SET_SUBREDDITS', data)
        },
    },
}
