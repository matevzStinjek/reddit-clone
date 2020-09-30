<template>
    <div class="chip" href="#" @click="onClick">
        <slot />
    </div>
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

<style scoped lang="scss">
@import 'shared/styles/colors.scss';

.chip {
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
</style>
