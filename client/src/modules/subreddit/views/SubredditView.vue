<template>
    <div>
        <subreddit-header />
        <div class="grid-wrapper">
            <create-post />
        </div>
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

<style scoped lang="scss">

.grid-wrapper {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 16px;
    padding: 16px;
}
</style>
