export default [
    {
        path: '/about',
        name: 'About',
        // route level code-splitting (generates a separate chunk which is lazy-loaded when the route is visited)
        component: () => import(/* webpackChunkName: "about" */ 'about/views/About.vue'),
    },
]
