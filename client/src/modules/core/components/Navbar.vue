<template>
    <div class="navbar">
        <div class="navbar__item">Reddit.com</div>
        <dropdown
            class="navbar__item"
            :value="selectedSubreddit"
            :options="subreddits"
            @input="onSubredditSelect"
            label="Home"
        />
        <search class="navbar__item" />
        <dropdown
            class="navbar__item"
            v-model="selectedProfileSetting"
            :options="profileOptions"
            label="Username"
        />
    </div>
</template>

<script>
import Search from 'shared/components/stateless/Search.vue'
import Dropdown from 'shared/components/stateless/Dropdown.vue'
import { mapGetters } from 'vuex'

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
        ...mapGetters([
            'subreddits',
            'profileOptions',
        ]),
    },
    methods: {
        onSubredditSelect (id) {
            const subreddit = this.subreddits.find(subreddit => subreddit.id === id).label
            this.$router.push(`/${subreddit}`).catch(() => {})
        },
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
