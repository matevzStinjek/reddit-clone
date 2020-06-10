export default {
    isUserJoined: false,
    toggleJoined () {
        this.isUserJoined = !this.isUserJoined
        return this.isUserJoined
    },
    fetchJoinedStatus () { return new Promise(resolve => resolve(this.isUserJoined)) },
    fetchSubredditInfo () {
        return new Promise(resolve => {
            resolve({
                title: 'Android',
                headerColor: '#17e387',
                logo: require('@/modules/subreddit/assets/androidLogo.png'),
            })
        })
    },
}
