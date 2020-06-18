<template>
    <div class="categories-wrapper">
        <div class="categories-wrapper__main-categories">
            <chip
                v-for="{ id, isActive, title, icon } in mappedCategories"
                :key="id"
                :class="{ active: isActive } | prefix('categories-wrapper__category--')"
                @click="onCategoryClick(id)"
            ><b-icon :icon="icon" /> {{ title }}</chip>
        </div>
    </div>
</template>

<script>
import Chip from 'shared/components/stateless/Chip.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        Chip,
    },
    data () {
        return {
            activeCategoryId: 'best',
        }
    },
    computed: {
        ...mapGetters([
            'categories',
        ]),
        mappedCategories () {
            return this.categories.map(category => ({ ...category, isActive: category.id === this.activeCategoryId }))
        },
    },
    methods: {
        onCategoryClick (id) {
            this.activeCategoryId = id
        },
    },
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';

.categories-wrapper {
  display: flex;
  background: $void;
  padding: 8px;
  justify-content: space-between;
  cursor: pointer;

  &__main-categories {
    display: flex;
  }

  &__category--active {
    color: $white;
  }
}
</style>
