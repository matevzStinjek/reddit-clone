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
        SET_UPVOTES: (state, data) => state.posts.find(post => post.id === data.id).upvotes = data.upvotes,
        SET_DOWNVOTES: (state, data) => state.posts.find(post => post.id === data.id).upvotes = data.downvotes,
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
        upvotePost ({ commit }, data) {
            service.fetchPosts()
                .then(posts => {
                    const post = posts.find(post => post.id === data.id)
                    post.downvoteIds.splice(post.downvoteIds.indexOf(data.userId), 1)
                    if (!post.upvoteIds.includes(data.userId)) service.upvotePost(post.id, data.userId)
                    else service.removeUpvote(post.id, data.userId)
                    const payload = { id: data.id, upvotes: post.upvotes }
                    commit('SET_UPVOTES', payload)
                })
        },
        downvotePost ({ commit }, id, userId) {
            service.fetchPosts()
                .then(posts => {
                    const post = posts.find(post => post.id === id)
                    post.upvoteIds.splice(post.upvoteIds.indexOf(userId), 1)
                    if (!post.downvoteIds.includes(userId)) post.downvoteIds.push(userId)
                    const downvotes = post.upvotes >= 1 ? --post.upvotes : 0
                    const data = { id, downvotes }
                    commit('SET_DOWNVOTES', data)
                })
        },
    },
}
