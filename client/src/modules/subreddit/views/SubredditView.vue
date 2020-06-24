<template>
    <div>
        <subreddit-header />
        <div class="my-grid">
            <input type="text">
            <about-community />
        </div>
    </div>
</template>

<script>
import SubredditHeader from 'subreddit/components/SubredditHeader.vue'
import AboutCommunity from 'shared/components/stateless/AboutCommunity.vue'

export default {
    name: 'Subreddit',
    components: {
        SubredditHeader,
        AboutCommunity,
    },
}
</script>

<style scoped lang="scss">

.my-grid {
    display: grid;
    grid-template-columns: 4fr 1fr;
}
</style>
