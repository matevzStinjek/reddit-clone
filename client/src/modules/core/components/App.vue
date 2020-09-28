<template>
    <div id="app">
        <navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from 'core/components/Navbar.vue'
import { mapActions } from 'vuex'

export default {
    components: {
        Navbar,
    },
    created () {
        this.initialise()
    },
    methods: {
        ...mapActions([
            'initialise',
        ]),
    },
}
</script>

<style lang="scss">
@import 'core/styles/bootstrap';
@import 'shared/styles/colors.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    background: black;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
