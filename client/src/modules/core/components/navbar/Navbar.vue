<template>
    <div>
        <h1>Navbar</h1>
    </div>
</template>

<script>
export default {
    name: 'navbar',
}
</script>

<style scoped lang="scss">
 @import "shared/styles/colors.scss";

.home-dropdown {
    width: 160px;
}

.search, .search:focus {
    background-color: $gray;
    color: $white;
}
</style>
