import service from 'subreddit/services/subreddit.service'
import constants from './constants.json'

export default {
    state: {
        title: null,
        isUserJoined: null,
        headerColor: null,
        logo: null,
    },
    getters: {
        navbarItems: () => constants.navbarOptions,
        title: state => state.title,
        isUserJoined: state => state.isUserJoined,
        headerColor: state => state.headerColor,
        logo: state => state.logo,
    },
    mutations: {
        SET_TITLE: (state, data) => state.title = data,
        SET_JOINED: (state, data) => state.isUserJoined = data,
        SET_COLOR: (state, data) => state.headerColor = data,
        SET_LOGO: (state, data) => state.logo = data,
    },
    actions: {
        async initialise ({ commit, dispatch }) {
            const { title, isUserJoined, headerColor, logo } = await dispatch('fetchSubredditInfo')
            commit('SET_TITLE', title)
            commit('SET_JOINED', isUserJoined)
            commit('SET_COLOR', headerColor)
            commit('SET_LOGO', logo)
        },
        async toggleJoinedStatus ({ commit, dispatch }) {
            // acts as a PUT request to the server
            service.info.isUserJoined = !service.info.isUserJoined
            const { isUserJoined } = await dispatch('fetchSubredditInfo')
            commit('SET_JOINED', isUserJoined)
        },
        async fetchSubredditInfo () {
            const data = await service.fetchSubredditInfo()
            return data
        },
    },
}
