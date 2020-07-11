import service from 'subreddit/services/subreddit.service'
import constants from './constants.json'

export default {
    state: {
        subredditInfo: null,
        isUserJoined: null,
        posts: null,
    },
    getters: {
        navbarItems: () => constants.navbarOptions,
        isUserJoined: state => state.isUserJoined,
        info: state => state.subredditInfo,
        posts: state => state.posts,
    },
    mutations: {
        SET_JOINED: (state, data) => state.isUserJoined = data,
        SET_SUBREDDIT_INFO: (state, data) => state.subredditInfo = data,
        SET_POSTS: (state, data) => state.posts = data,
        SET_UPVOTES: (state, id) => state.posts.find(post => post.id === id).upvotes++,
        SET_DOWNVOTES: (state, id) => {
            if (state.posts.find(post => post.id === id).upvotes >= 1) state.posts.find(post => post.id === id).upvotes--
        },
    },
    actions: {
        initialise ({ commit }) {
            service.fetchSubredditInfo()
                .then(res => commit('SET_SUBREDDIT_INFO', res))
                .catch(err => console.log(err))
            service.fetchJoinedStatus()
                .then(res => commit('SET_JOINED', res))
                .catch(err => console.log(err))
            service.fetchPosts()
                .then(res => commit('SET_POSTS', res))
                .catch(err => console.log(err))
        },
        async toggleJoinedStatus ({ commit }) {
            const isUserJoined = await service.toggleJoined()
            commit('SET_JOINED', isUserJoined)
        },
        upvotePost ({ commit }, id) {
            commit('SET_UPVOTES', id)
        },
        downvotePost ({ commit }, id) {
            commit('SET_DOWNVOTES', id)
        },
    },
}
