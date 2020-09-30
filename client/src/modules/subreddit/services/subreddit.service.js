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
                logo: 'https://b.thumbs.redditmedia.com/fI7UdJ-vgpnLdxy28QdKIYBGg-fEo7KxQ_PS7pn4QzM.png',
            })
        })
    },
    fetchCommunityInfo () {
        return new Promise(resolve => {
            resolve({
                description: 'FC Barcelona News and Discussion.',
                memberCount: '72700000',
                onlineMemberCount: '1100',
                createdDate: 'Oct 12, 2010',
            })
        })
    },
}
