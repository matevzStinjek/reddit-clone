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
        SET_VOTES: (state, data) => state.posts.find(post => post.id === data.id).upvotes = data.upvotes,
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
        giveVote ({ commit }, data) {
            service.fetchPosts()
                .then(posts => {
                    const post = posts.find(post => post.id === data.id)
                    if (data.isUpvote) {
                        if (post.downvoteIds.includes(data.userId)) service.removeVote(post.id, data.userId, false)
                        if (!post.upvoteIds.includes(data.userId)) service.upvotePost(post.id, data.userId)
                        else service.removeVote(post.id, data.userId, true)
                    } else {
                        if (post.upvoteIds.includes(data.userId)) service.removeVote(post.id, data.userId, true)
                        if (!post.downvoteIds.includes(data.userId)) service.downvotePost(post.id, data.userId)
                        else service.removeVote(post.id, data.userId, false)
                    }
                    const payload = { id: data.id, upvotes: post.upvotes }
                    commit('SET_VOTES', payload)
                })
        },
    },
}
