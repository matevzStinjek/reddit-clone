<template>
    <div class="navbar">
        <div class="navbar__item">Reddit.com</div>
        <dropdown
            class="navbar__item"
            v-model="selectedSubreddit"
            :options="allSubreddits"
            label="Home"
        />
        <search class="navbar__item" />
        <dropdown
            class="navbar__item"
            v-model="selectedProfileSetting"
            :options="allProfileOptions"
            label="Username"
        />
    </div>
</template>

<script>
import Search from 'shared/components/stateless/Search.vue'
import Dropdown from 'shared/components/stateless/Dropdown.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        Search,
        Dropdown,
    },
    data () {
        return {
            selectedSubreddit: null,
            selectedProfileSetting: null,
        }
    },
    computed: {
        ...mapGetters({
            allSubreddits: 'allSubreddits',
            allProfileOptions: 'allProfileOptions',
        }),
    },
    created ()  {
        this.fetchSubreddits()
        this.fetchProfileOptions()
    },
    methods: {
        ...mapActions(["fetchSubreddits", "fetchProfileOptions"]),
    },

}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors';

.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: $ink;
  color: $white;

  &__item {
      padding: 10px;
  }
}
</style>
