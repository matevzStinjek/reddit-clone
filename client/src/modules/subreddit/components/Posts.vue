<template>
    <div>
        <div :key="post.id" v-for="post in posts" class="post">
            <div class="post__upvotes">{{ post.upvotes }}</div>
            <img class="post__image" :src="post.image">
            <div class="post__main-section">
                <div class="post__title">{{ post.title }}</div>
                <div class="post__user">Posted by u/{{ post.user }}</div>
                <div class="post__date">{{ post.date }}</div>
                <div class="post__comments-count">{{ post.commentsCount }} comments</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'posts',
        ]),
    },
    methods: {

    },
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';

.post {
    background: $void;
    color: $white;
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid $ash;

    &__image {
        max-width: 100%;
        max-height: 80px;
        height: auto;
    }

    &__title {
        font-weight: bold;
    }

    &__user {
        color: $smog;
    }
}
</style>
