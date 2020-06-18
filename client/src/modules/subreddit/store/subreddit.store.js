import service from 'subreddit/services/subreddit.service'
import constants from './constants.json'

export default {
    state: {
        subredditInfo: null,
        isUserJoined: null,
    },
    getters: {
        navbarItems: () => constants.navbarOptions,
        isUserJoined: state => state.isUserJoined,
        info: state => state.subredditInfo,
    },
    mutations: {
        SET_JOINED: (state, data) => state.isUserJoined = data,
        SET_SUBREDDIT_INFO: (state, data) => state.subredditInfo = data,
    },
    actions: {
        initialise ({ commit }) {
            service.fetchSubredditInfo()
                .then(res => commit('SET_SUBREDDIT_INFO', res))
                .catch(err => console.log(err))
            service.fetchJoinedStatus()
                .then(res => commit('SET_JOINED', res))
                .catch(err => console.log(err))
        },
        async toggleJoinedStatus ({ commit }) {
            const isUserJoined = await service.toggleJoined()
            commit('SET_JOINED', isUserJoined)
        },
    },
}
