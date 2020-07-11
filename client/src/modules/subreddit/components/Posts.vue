<template>
    <div>
        <div :key="post.id" v-for="post in posts" class="post">
            <div class="post__rating">
                <b-icon-arrow-up class="post__upvotes" @click="onUpvoteClick(post.id)" font-scale="2" />
                {{ post.upvotes }}
                <b-icon-arrow-down class="post__downvotes" @click="onDownvoteClick(post.id)" font-scale="2" />
            </div>
            <img class="post__image" :src="post.image">
            <div class="post__main-section">
                <div class="post__title">{{ post.title }}</div>
                <div class="post__info">
                    <div class="post__user">Posted by<a class="post__user--link" href="#"> u/{{ post.user }}</a></div>
                    <div class="post__date">{{ timeSinceUpload(post.date) }}</div>
                </div>
                <div class="post__comments"><b-icon-chat-square /> {{ post.commentsCount }} comments</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'posts',
        ]),
    },
    methods: {
        ...mapActions([
            'upvotePost',
            'downvotePost',
        ]),
        timeSinceUpload (time) {
            // Check if the time given is valid
            const oldDate = new Date(time)
            if (!(oldDate instanceof Date) || Number.isNaN(oldDate)) return 'Given time is not valid'

            const miliseconds = Math.abs(new Date() - oldDate)
            const minutes = (miliseconds / 60000)
            if (minutes < 1) return 'Just now'
            if (minutes < 60) return `${minutes.toFixed(0)} min ago`

            const hours = (minutes / 60)
            if (hours < 24) return `${hours.toFixed(0)} hours ago`

            const days = (hours / 24)
            if (days < 2) return `${days.toFixed(0)} day ago`
            if (days < 7) return `${days.toFixed(0)} days ago`
            if (days < 30) return `${(days / 7).toFixed(0)} weeks ago`

            const months = (days / 30)
            if (months < 12) return `${months.toFixed(0)} months ago`

            return `${(months / 12).toFixed(0)} years ago`
        },
        onUpvoteClick (id) {
            this.upvotePost(id)
        },
        onDownvoteClick (id) {
            this.downvotePost(id)
        },
    },
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';
$default-margin-left: 8px;

.post {
    background: $void;
    color: $white;
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid $ash;
    border-bottom: none;

    &:hover {
        border: 1px solid $dust;
    }

    &__rating {
        display: flex;
        flex-direction: column;
    }

    &__upvotes:hover {
        color: $orange;
        cursor: pointer;
    }

    &__downvotes:hover {
        color: $blue;
        cursor: pointer;
    }

    &__image {
        margin-left: $default-margin-left;
        max-width: 100%;
        max-height: 80px;
        height: auto;
    }

    &__main-section {
        margin-left: $default-margin-left;
        text-align: left;
    }

    &__title {
        font-weight: bold;
    }

    &__info {
        display: flex;
    }

    &__user {
        color: $smog;
        margin-right: 16px;

        &--link {
            color: $smog;
        }
    }

    &__date {
        color: $smog;
    }

    &__comments {
        color: $dust;
        font-weight: bold;
        display: inline-block;
        padding: 4px;
        border-radius: 5%;

        &:hover {
            background: $slate;
            cursor: pointer;
        }
    }
}
</style>
