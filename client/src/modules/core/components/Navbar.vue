<template>
    <div class="flex-container">
        <h4 class="flex-item">Reddit.com</h4>
        <dropdown
            class="flex-item"
            v-model="selectedOption"
            :options="options"
            :label="homeLabel"
        />
        <search class="flex-item" />
        <dropdown
            class="flex-item"
            v-model="selectedOption"
            :options="options"
            :label="profileLabel"
        />
    </div>
</template>

<script>
import Search from 'shared/components/stateless/Search.vue'
import Dropdown from 'shared/components/stateless/Dropdown.vue'

export default {
    components: {
        Search,
        Dropdown,
    },
    data () {
        return {
            selectedOption: null,
            options: [
                { id: 1, label: 'Test' },
                { id: 2, label: 'Test 2', disabled: true },
            ],
            homeLabel: 'Home',
            profileLabel: 'Username',
        }
    },
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors';

.flex-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: $ink;
}

.flex-item {
  padding: 10px;
  color: $white;
}

</style>