<template>
    <div class="categories">
        <div class="categories__list">
            <chip
                v-for="{ id, isActive, title, icon } in mappedCategories"
                :key="id"
                :class="{ active: isActive } | prefix('categories__category--')"
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

.categories {
    display: flex;
    background: $void;
    padding: 8px;
    justify-content: space-between;
    cursor: pointer;

    &__list {
        display: flex;
    }

    &__category--active {
        color: $white;
    }
}
</style>
