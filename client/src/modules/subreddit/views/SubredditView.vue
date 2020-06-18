<template>
    <div>
        <subreddit-header />
        <create-post />
    </div>
</template>

<script>
import CreatePost from 'subreddit/components/CreatePost.vue'
import SubredditHeader from 'subreddit/components/SubredditHeader.vue'

export default {
    name: 'Subreddit',
    components: {
        CreatePost,
        SubredditHeader,
    },
}
</script>
