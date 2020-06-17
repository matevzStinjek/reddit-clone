<template>
    <div>
        <div class="categories-wrapper">
            <div class="categories-wrapper__main-categories">
                <a class="categories-wrapper__category" href="#"><b-icon-lightning-fill /> Hot</a>
                <a class="categories-wrapper__category" href="#"><b-icon-sun /> New</a>
                <a class="categories-wrapper__category" href="#"><b-icon-building /> Top</a>
                <a class="categories-wrapper__category" href="#">...</a>
            </div>
            <a class="categories-wrapper__category" href="#"><b-icon-card-text /></a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';

.categories-wrapper {
  display: flex;
  background: $void;
  padding: 8px;
  justify-content: space-between;

  &__main-categories {
    display: flex;
  }

  &__category {
    color: $ash;
    padding: 8px;
    margin-right: 4px;
    border-radius: 32px;

    &:hover {
      text-decoration: none;
      color: $white;
      background: $slate;
    }
  }
}
</style>
