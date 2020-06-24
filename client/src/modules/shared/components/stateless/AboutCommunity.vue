<template>
    <div class="about-community">
        <div class="about-community__heading">About Community</div>
        <div class="about-community__description">FC Barcelona News and Discussion</div>
        <div class="about-community__subscriber-section">
            <div class="about-community__subscribers">
                <div class="about-community__subscribers-count">72.7m</div>
                <div class="about-community__subscribers-description">Cules</div>
            </div>
            <div class="about-community__subscribers-online">
                <div class="about-community__subscribers-count">1.1k</div>
                <div class="about-community__subscribers-description">Online</div>
            </div>
        </div>
        <hr class="about-community__hr">
        <div class="about-community__date"><b-icon-calendar /> Created Oct 12, 2010</div>
        <button-element class="about-community__create-post">CREATE POST</button-element>
    </div>
</template>

<script>
import Button from 'shared/components/stateless/Button.vue'

export default {
    components: {
        buttonElement: Button,
    },
}
</script>

<style scoped lang="scss">
@import 'shared/styles/colors.scss';
$default-margin-bottom: 8px;

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

  &__subscriber-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: $default-margin-bottom;
  }

  &__subscribers-count {
    font-weight: 500;
  }

  &__subscribers-description {
    font-size: 12px;
    font-weight: 500;
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
