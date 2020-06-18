<template>
    <div>
        <subreddit-header />
        <categories />
    </div>
</template>

<script>
import SubredditHeader from 'subreddit/components/SubredditHeader.vue'
import Categories from 'subreddit/components/Categories.vue'

export default {
    name: 'Subreddit',
    components: {
        SubredditHeader,
        Categories,
    },
}
</script>
