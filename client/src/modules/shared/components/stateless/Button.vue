<template>
    <b-button @click="onClick()">
        <slot />
    </b-button>
</template>

<script>
export default {
    methods: {
        onClick () {
            this.$emit('click')
        },
    },
}
</script>
