<template>
    <div>
        <div class="navbar">
            <ul class="navbar__list">
                <li class="navbar__item">Reddit.com</li>
                <li class="navbar__item">
                    <select class="navbar__select">
                        <option value="home">Home</option>
                        <option value="popular">Popular</option>
                        <option value="all">All</option>
                    </select>
                </li>
                <li class="navbar__item">
                    <form class="navbar__form">
                        <input class="navbar__input" type="text" placeholder="Search">
                    </form>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
}
</script>

<style scoped lang="scss">
@import "shared/styles/colors.scss";

.navbar {
    background: $gray;
    color: $white;
    padding: 10px;

    &__item {
        display: inline;
        margin: 20px;
    }

    &__form {
        display: inline;
    }

    &__input {
        width: 320px;
        padding: 8px 20px;
        margin: 8px 0;
        border: 1px solid $white;
        border-radius: 4px;
    }

    &__select {
        width: 160px;
        background: $charcoal;
        color: $white;
        padding: 8px 20px;
        margin: 8px 0;
        border-radius: 4px;
    }
}
</style>
