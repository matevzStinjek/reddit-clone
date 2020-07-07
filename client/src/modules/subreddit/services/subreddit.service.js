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
    fetchPosts () {
        return new Promise(resolve => {
            resolve([
                {
                    id: 'messiGOAT',
                    title: 'Messi es un goat',
                    user: 'xFlamezzLoqi',
                    date: '7/7/2020',
                    upvotes: '700',
                    image: 'https://a.thumbs.redditmedia.com/ahDFuCfcFr6xO0H8KLG7syxK_B3zamgiP45e8Z6FVc8.png',
                    commentsCount: '44',
                },
                {
                    id: 'ronaldoCry',
                    title: 'Ronaldo INJUSTICA',
                    user: 'xxDENIXDXX',
                    date: '5/7/2020',
                    upvotes: '104',
                    image: 'https://i.insider.com/4feb7debecad04ff37000020?width=400&format=jpeg',
                    commentsCount: '1049',
                },
            ])
        })
    },
}
