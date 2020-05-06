<template>
    <div id="app">
        <navbar />
    </div>
</template>

<script>
import Navbar from 'core/components/navbar/Navbar.vue'

export default {
    components: {
        Navbar,
    },
}
</script>

<style lang="scss">
@import 'core/styles/bootstrap';

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
