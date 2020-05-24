<template>
    <div>
        <!-- Header Section -->
        <header class="subreddit-header">
            <div class="subreddit-header__image" />
            <div class="subreddit-header__title text-left">
                <img src="@/modules/subreddit/assets/androidLogo.png" alt="Subreddit Logo">
                <span style="color: white;" class="font-weight-bold logo">Android</span>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Subreddit',
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';

.subreddit-header {
    height: 180px;
    color: $white;
    .logo {
        margin-left: 115px;
        font-size: 28px;
    }

    &__image {
        height: 45%;
        background: rgb(34, 149, 138);
    }

    &__title {
        height: 55%;
        background: $dark;
        position: relative;

        img {
            max-height: 80%;
            border: solid 4px $white;
            border-radius: 50%;
            position: absolute;
            left: 20px;
            top: -20px;
        }
    }

}

</style>