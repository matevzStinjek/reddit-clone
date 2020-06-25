<template>
    <div class="about-community">
        <div class="about-community__heading">{{ communityConstants.heading }}</div>
        <div class="about-community__description">{{ communityInfo.description }}</div>
        <div class="about-community__member-section">
            <div class="about-community__members">
                <div class="about-community__members-count">{{ formatNum(communityInfo.memberCount) }}</div>
                <div class="about-community__members-description">{{ communityConstants.membersText }}</div>
            </div>
            <div class="about-community__members-online">
                <div class="about-community__members-count">{{ formatNum(communityInfo.onlineMemberCount) }}</div>
                <div class="about-community__members-description">{{ communityConstants.onlineText }}</div>
            </div>
        </div>
        <hr class="about-community__hr">
        <div class="about-community__date"><b-icon-calendar /> Created {{ communityInfo.createdDate }}</div>
        <button-element class="about-community__create-post">{{ communityConstants.buttonText.toUpperCase() }}</button-element>
    </div>
</template>

<script>
import Button from 'shared/components/stateless/Button.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        buttonElement: Button,
    },
    computed: {
        ...mapGetters([
            'communityConstants',
            'communityInfo',
        ]),
    },
    methods: {
        formatNum (num) {
            const number = parseInt(num)
            if (Number.isNaN(number)) return 'Not a valid number'
            if (number < 0) return 'Negative number of members'
            if (number >= 1000 && number < 1000000) return (number/1000).toFixed(1) + 'k'
            if (number >= 1000000) return (number/1000000).toFixed(1) + 'm'
            return number.toString()
        },
    },
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';
$default-margin-bottom: 8px;
$default-font-weight: 500;

.about-community {
  background: $void;
  color: $platinum;
  text-align: left;
  padding: 16px;

  &__heading {
    color: $ash;
    font-weight: 800;
    margin-bottom: 16px;
  }

  &__description {
    margin-bottom: $default-margin-bottom;
  }

  &__member-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: $default-margin-bottom;
  }

  &__members-count {
    font-weight: $default-font-weight;
  }

  &__members-description {
    font-size: 12px;
    font-weight: $default-font-weight;
  }

  &__hr {
    background: $ash;
  }

  &__date {
    margin-bottom: $default-margin-bottom;
  }

  &__create-post {
    width: 100%;
    background: $cement;
    color: black;
    font-weight: 600;

    &:hover {
      background: $platinum;
    }
  }
}
</style>
