<template>
    <div class="search">
        <span class="search__icon"><b-icon-search /></span>
        <input type="text" class="form-control" placeholder="Search">
    </div>
</template>

<style scoped lang="scss">
@import 'shared/styles/colors';

.search .form-control {
    padding-left: 40px;
    background: $void;
    color: $smog;

    &:hover {
      border: 2px solid $white;
    }
}

.search__icon {
    position: absolute;
    display: block;
    width: 40px;
    line-height: 40px;
    color: $smog;
}
</style>
