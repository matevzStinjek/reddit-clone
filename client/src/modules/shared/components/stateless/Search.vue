<template>
    <div class="search">
        <span class="form-control-feedback"><b-icon-search /></span>
        <input type="text" class="form-control" placeholder="Search">
    </div>
</template>

<script>
export default {
    name: 'search',
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors';

.search {
    width: 40%;
    min-width: 150px;
}

.search .form-control {
    padding-left: 2.5rem;
    background: $redditBackground;
    color: $lightGray;
}

.form-control:hover {
      border: 1.5px solid $white;
}

.search .form-control-feedback {
    position: absolute;
    display: block;
    width: 2.5rem;
    line-height: 2.5rem;
    color: $lightGray;
}
</style>