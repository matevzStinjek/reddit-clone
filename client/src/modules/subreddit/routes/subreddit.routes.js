export default [
    {
        path: '/r/subreddit',
        name: 'Subreddit',
        component: () => import(/* webpackChunkName: "subreddit" */ 'subreddit/views/SubredditView.vue'),
    },
]
