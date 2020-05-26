<template>
    <div class="subreddit-header">
        <div class="subreddit-header__banner" />
        <div class="subreddit-header__description">
            <img class="subreddit-header__image" src="@/modules/subreddit/assets/androidLogo.png" alt="Subreddit Logo">
            <span class="subreddit-header__logo">{{ getTitle }}</span>
            <button-element class="subreddit-header__join-button" @click="onJoinClick()">{{ displayMessage }}</button-element>
            <div class="subreddit-header__name">r/{{ getTitle }}</div>
            <div class="subreddit-header__navbar">
                <div :key="id" v-for="{id, isActive, title} in mappedItems" @click="onItemClick(id)" :class="{ active: isActive }" class="subreddit-header__navbar-item">{{ title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'shared/components/stateless/Button.vue'
import { mapGetters, mapActions } from 'vuex'

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
        ...mapGetters(['getAllNavbarItems', 'getTitle']),
        displayMessage () {
            return this.isJoined ? 'Joined' : 'Join'
        },
        mappedItems () {
            return this.getAllNavbarItems.map(item => ({ ...item, isActive: item.id === this.activeTabId }))
        },
    },
    created () {
        this.fetchNavbarItems()
        this.fetchTitle()
    },
    methods: {
        ...mapActions(['fetchNavbarItems', 'fetchTitle']),
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

$title-margin: 128px;
$logo-margin-left: 32px;

.subreddit-header {
    color: $white;

    &__logo {
        margin-left: $title-margin;
        font-size: 28px;
        color: $white;
        font-weight: bold;
    }

    &__banner {
        height: 80px;
        background: $blue;
    }

    &__name {
        margin-left: $title-margin;
        color: $smog;
    }

    &__description {
        height: 128px;
        background: $dark;
        position: relative;
        text-align: left;

    }

    &__image {
        max-height: 80px;
        border: solid 4px $white;
        border-radius: 50%;
        position: absolute;
        left: $logo-margin-left;
        top: -16px;
    }

    &__join-button {
        width: 100px;
        margin-left: 10px;
        font-weight: bold;
        border: 1px solid $white;
        background: $void;
    }

    &__navbar {
        display: flex;
        color: $dust;
        margin-left: $logo-margin-left;
        margin-top: 32px;


        .active {
            color: $white;
            font-weight: bold;
            border-bottom: 3px solid $white;
        }
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
