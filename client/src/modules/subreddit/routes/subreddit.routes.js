export default [
    {
        path: '/r/*',
        name: 'Subreddit',
        component: () => import(/* webpackChunkName: "subreddit" */ 'subreddit/views/SubredditView.vue'),
    },
]
