<template>
    <header class="subreddit-header">
        <div class="subreddit-header__image" />
        <div class="subreddit-header__title text-left">
            <img src="@/modules/subreddit/assets/androidLogo.png" alt="Subreddit Logo">
            <span class="font-weight-bold logo">{{ title }}</span>
            <b-button variant="dark join-button font-weight-bold" @click="isJoined = !isJoined" class="ml-3">{{ displayMessage() }}</b-button>
            <div class="subreddit-name">
                <p class="text-muted">{{ subredditName }}</p>
            </div>
            <div class="header-navbar">
                <p :key="item.id" v-for="item in navbarItems" @click="toggleActive(item.id)" :class="{ active: item.isActive }" class="header-navbar__item">{{ item.title }}</p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            title: 'Android',
            subredditName: 'r/Android',
            isJoined: false,
            navbarItems: [
                {
                    id: 1,
                    title: 'Posts',
                    isActive: true,
                },
                {
                    id: 2,
                    title: 'Wiki',
                    isActive: false,
                },
                {
                    id: 3,
                    title: 'Detailed Rules',
                    isActive: false,
                },
                {
                    id: 4,
                    title: 'IRC',
                    isActive: false,
                },
                {
                    id: 5,
                    title: 'Telegram',
                    isActive: false,
                },
            ],
        }
    },
    methods: {
        displayMessage () {
            return this.isJoined ? 'Joined' : 'Join'
        },
        toggleJoined () {
            this.isJoined = !this.isJoined
        },
        toggleActive(id) {
            this.navbarItems.find(item => item.isActive).isActive = false
            this.navbarItems.find(item => item.id === id).isActive = true
        },
    },
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';
@import 'subreddit/styles/variables.scss';

.subreddit-header {
    height: $default-header-height;
    color: $white;
    .logo {
        margin-left: $title-margin;
        font-size: 28px;
        color: $white;
    }

    &__image {
        height: 45%;
        background: $android-header;
    }

    &__title {
        height: 55%;
        background: $dark;
        position: relative;

        img {
            height: 80%;
            max-height: 80px;
            border: solid 4px $white;
            border-radius: 50%;
            position: absolute;
            left: $logo-margin-left;
            top: -16px;
        }
    }

    .join-button {
        width: 100px;
        border: 1px solid $white;
    }
}

.subreddit-name {
    margin-left: $title-margin;
}

.header-navbar {
    display: flex;
    color: $dust;
    margin-left: $logo-margin-left;

    &__item {
        margin-right: 10px;
        padding: 0 10px;
    }

    &__item:hover {
        color: $white;
        cursor: pointer;
    }

    .active {
        color: $white;
        font-weight: bold;
        border-bottom: 3px solid $white;
    }
}
</style>