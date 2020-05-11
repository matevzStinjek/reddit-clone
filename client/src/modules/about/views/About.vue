<template>
    <div class="about">
        <h1>This is an about page</h1>
        <dropdown
            v-model="selectedOption"
            :options="options"
        />
    </div>
</template>

<script>
// Dropdown component demo purposes only, can be removed
import Dropdown from 'shared/components/stateless/Dropdown.vue'

export default {
    name: 'About',
    components: {
        Dropdown,
    },
    data () {
        return {
            selectedOption: null,
            options: [
                { id: 1, label: 'Test' },
                { id: 2, label: 'Test 2', disabled: true },
            ],
        }
    },
}
</script>
