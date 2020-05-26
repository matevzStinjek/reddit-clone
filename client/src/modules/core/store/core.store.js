import service from 'core/services/core.service.js'
import constants from './constants.json'

export default {
    state: {
        subreddits: [],
        profileOptions: [],
    },
    getters: {
        allSubreddits: state => state.subreddits,
        allProfileOptions: state => state.profileOptions,
    },
    mutations: {
        fetchSubreddits: (state, data) => state.subreddits = data,
        fetchProfileOptions: (state, data) => state.profileOptions = data,
    },
    actions: {
        async fetchSubreddits ({ commit }) {
            const data = await service.fetchSubreddits()
            commit('fetchSubreddits', data)
        },
        async fetchProfileOptions ({ commit }) {
            const data = await constants.profileOptions
            commit('fetchProfileOptions', data)
        },
    },
}
