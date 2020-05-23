export default [
    {
        path: '/r/subreddit',
        name: 'Subreddit',
        // route level code-splitting (generates a separate chunk which is lazy-loaded when the route is visited)
        component: () => import(/* webpackChunkName: "subreddit" */ 'subreddit/views/SubredditView.vue'),
    },
]