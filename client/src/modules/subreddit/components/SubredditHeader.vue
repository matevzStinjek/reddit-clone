<template>
    <div class="subreddit-header">
        <div class="subreddit-header__banner" />
        <div class="subreddit-header__description">
            <img class="subreddit-header__image" src="@/modules/subreddit/assets/androidLogo.png" alt="Subreddit Logo">
            <span class="subreddit-header__logo">{{ getTitle }}</span>
            <custom-button class="subreddit-header__join-button" @click="onJoinClick()">{{ displayMessage }}</custom-button>
            <p class="subreddit-header__name">r/{{ getTitle }}</p>
            <div class="subreddit-header__navbar">
                <p :key="item.id" v-for="item in mappedItems" @click="onItemClick(item.id)" :class="{ active: item.isActive }" class="subreddit-header__navbar-item">{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from 'shared/components/stateless/Button.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        CustomButton,
    },
    data () {
        return {
            isJoined: false,
            activeTabId: 1,
        }
    },
    computed: {
        ...mapGetters({
            getAllNavbarItems: 'getAllNavbarItems',
            getTitle: 'getTitle',
        }),
        displayMessage () {
            return this.isJoined ? 'Joined' : 'Join'
        },
        mappedItems () {
            return this.getAllNavbarItems.map(item => ({ ...item, isActive: item.id === this.activeTabId }))
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
