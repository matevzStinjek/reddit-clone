export default {
    isUserJoined: false,
    posts: [
        {
            id: 'messiGOAT',
            title: 'Messi es un goat',
            user: 'xFlamezzLoqi',
            date: 'Wed Jul 08 2020 10:19:25 GMT+0200 (Central European Summer Time)',
            upvotes: 700,
            image: 'https://a.thumbs.redditmedia.com/ahDFuCfcFr6xO0H8KLG7syxK_B3zamgiP45e8Z6FVc8.png',
            commentsCount: '44',
            upvoteIds: [],
            downvoteIds: [],
        },
        {
            id: 'ronaldoCry',
            title: 'Ronaldo INJUSTICA',
            user: 'xxDENIXDXX',
            date: 'Tue Jul 07 2020 09:19:25 GMT+0200 (Central European Summer Time)',
            upvotes: 12,
            image: 'https://i.insider.com/4feb7debecad04ff37000020?width=400&format=jpeg',
            commentsCount: '1049',
            upvoteIds: [],
            downvoteIds: [],
        },
    ],
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
    fetchPosts () {
        return new Promise(resolve => {
            resolve(this.posts)
        })
    },
    upvotePost (id, userId) {
        const post = this.posts.find(post => post.id === id)
        post.upvotes++
        post.upvoteIds.push(userId)
    },
    removeVote (id, userId, isUpvote) {
        const post = this.posts.find(post => post.id === id)
        if (isUpvote) {
            post.upvotes--
            post.upvoteIds.splice(post.upvoteIds.indexOf(userId), 1)
        } else {
            post.upvotes++
            post.downvoteIds.splice(post.downvoteIds.indexOf(userId), 1)
        }
    },
    downvotePost (id, userId) {
        const post = this.posts.find(post => post.id === id)
        post.upvotes >= 1 ? post.upvotes-- : post.upvotes = 0
        post.downvoteIds.push(userId)
    },
}
