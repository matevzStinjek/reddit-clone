<template>
    <b-dropdown class="dropdown" :text="selectedOptionLabel">
        <b-dropdown-item
            v-for="option in options"
            :key="option.id"
            :disabled="option.isDisabled"
            :active="option.isSelected"
            @click="onClick(option.id)"
        >{{ option.label }}</b-dropdown-item>
    </b-dropdown>
</template>

<script>
/**
 * options: [{ id, label, isDisabled }]
 */

export default {
    props: {
        value: { type: [Number, String], default: null }, // id
        options: { type: Array, required: true },
        label: { type: String, default: 'Select' },
    },
    computed: {
        mappedOptions () {
            return this.options.map(option => ({ ...option, isSelected: option.id === this.value }))
        },
        selectedOption () {
            return this.mappedOptions.find(option => option.isSelected)
        },
        selectedOptionLabel () {
            return this.selectedOption && this.selectedOption.label || this.label
        },
    },
    methods: {
        onClick (id) {
            this.$emit('input', id)
        },
    },
}
</script>

<style lang="scss">
@import 'shared/styles/colors';

.dropdown > .dropdown-toggle {
    background: $void;
    width: 128px;
}
</style>
