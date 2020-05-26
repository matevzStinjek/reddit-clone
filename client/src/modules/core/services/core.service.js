export default {
    // I commented this code to discuss if this is the way we're going to make calls to our api

    // getSubreddits: async () => {
    //     try {
    //         const res = await('someApi')
    //         return res.data()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },

    getSubreddits () {
        return [
            { id: 1, label: 'r/Android' },
            { id: 2, label: 'r/Barca', disabled: true },
            { id: 3, label: 'r/Soccer' },
        ]
    },
    getProfileOptions () {
        return [
            { id: 1, label: 'My Profile' },
            { id: 2, label: 'User Settings' },
        ]
    },
}
