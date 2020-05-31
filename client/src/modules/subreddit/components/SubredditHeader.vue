<template>
    <div class="subreddit-header">
        <div class="subreddit-header__banner" />
        <div class="subreddit-header__description">
            <img class="subreddit-header__image" src="@/modules/subreddit/assets/androidLogo.png" alt="Subreddit Logo">
            <div class="subreddit-header__logo">{{ title }}</div>
            <button-element class="subreddit-header__join-button" @click="onJoinClick()">{{ displayMessage }}</button-element>
            <div class="subreddit-header__name">r/{{ title }}</div>
            <div class="subreddit-header__navbar">
                <div
                    v-for="{ id, isActive, title } in mappedItems"
                    :key="id"
                    class="subreddit-header__navbar-item"
                    :class="{ active: isActive } | prefix('subreddit-header--')"
                    @click="onItemClick(id)"
                >{{ title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'shared/components/stateless/Button.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        buttonElement: Button,
    },
    data () {
        return {
            isJoined: false,
            activeTabId: 'posts',
        }
    },
    computed: {
        ...mapGetters([
            'navbarItems',
            'title',
        ]),
        displayMessage () {
            return this.isJoined ? 'Joined' : 'Join'
        },
        mappedItems () {
            return this.navbarItems.map(item => ({ ...item, isActive: item.id === this.activeTabId }))
        },
    },
    methods: {
        onJoinClick () {
            this.isJoined = !this.isJoined
        },
        onItemClick (id) {
            this.activeTabId = id
        },
    },
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';

$logo-margin-left: 32px;

.subreddit-header {
    color: $white;

    &__banner {
        height: 80px;
        background: $blue;
    }

    &__description {
        height: 128px;
        background: $slate;
        position: relative;
        text-align: left;
    }

    &__image {
        max-height: 80px;
        border: solid 4px $white;
        border-radius: 50%;
        left: $logo-margin-left;
        margin-top: -16px;
        margin: -16px 16px 0 32px;
    }

    &__logo {
        font-size: 28px;
        color: $white;
        font-weight: bold;
        display: inline;
    }

    &__join-button {
        width: 100px;
        margin-left: 10px;
        font-weight: bold;
        border: 1px solid $white;
        background: $void;
    }

    &__name {
        color: $smog;
        margin-top: -16px;
        margin-left: 128px;
    }

    &__navbar {
        display: flex;
        color: $dust;
        margin-left: $logo-margin-left;
        position: absolute;
        bottom: 0;
    }

    &--active {
            color: $white;
            font-weight: bold;
            border-bottom: 3px solid $white;
        }

     &__navbar-item {
            margin-right: 10px;
            padding: 0 10px;
        }

    &__navbar-item:hover {
        color: $white;
        cursor: pointer;
    }
}
</style>
