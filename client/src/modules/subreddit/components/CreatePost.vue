<template>
    <div class="component-wrapper">
        <img class="component-wrapper__avatar" src="@/modules/subreddit/assets/avatar.jpg" alt="Create Post">
        <input class="component-wrapper__search form-control" type="text" placeholder="Create Post">
        <b-icon-link class="component-wrapper__link" />
    </div>
</template>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';

.component-wrapper {
    display: flex;
    background: $void;
    padding: 8px;

    &__avatar {
      max-width: 100%;
      max-height: 32px;
      border-radius: 50%;
      margin-right: 8px;
    }

    &__search {
      background: $ink;
    }

    &__link {
      margin-left: 8px;
      color: $white;
      font-size: 40px;

      &:hover {
        background: $slate;
        cursor: pointer;
      }
    }
}
</style>
