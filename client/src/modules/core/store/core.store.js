import service from 'core/services/core.service.js'

export default {
    state: {
        subreddits: service.getSubreddits(),
        profileOptions: service.getProfileOptions(),
    },
    getters: {
        allSubreddits: state => state.subreddits,
        allProfileOptions: state => state.profileOptions,
    },
    mutations: {},
    actions: {},
}
