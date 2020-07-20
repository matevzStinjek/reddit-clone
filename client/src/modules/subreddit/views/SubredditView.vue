<template>
    <div>
        <subreddit-header />
        <posts />
    </div>
</template>

<script>
import SubredditHeader from 'subreddit/components/SubredditHeader.vue'
import Posts from 'subreddit/components/Posts.vue'

export default {
    name: 'Subreddit',
    components: {
        SubredditHeader,
        Posts,
    },
}
</script>
