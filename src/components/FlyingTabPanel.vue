<template>
  <div class="flying-tab-panel">
    <div class="flying-tab-panel__header flying-tab-panel-header untouchable">
      <div class="flying-tab-panel-header__wrapper">
        <button
          v-for="tab in props.tabs"
          :key="tab.label"
          :class="[
            'flying-tab-panel-header__button',
            { 'flying-tab-panel-header__button--current': tab.current },
          ]"
          type="button"
        >
          {{ tab.label }}
        </button>
      </div>

      <button
        class="flying-tab-panel-header__button flying-tab-panel-header__button--close"
        type="button"
      >
        <svg-icon
          name="close"
          width="28px"
          height="28px"
        />
      </button>
    </div>

    <div class="flying-tab-panel__body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ITab } from '../types/tabs.ts';

const props = defineProps<{ tabs: ITab[] }>();
</script>

<style lang="scss">
.flying-tab-panel {
  width: 562px;
  background: $color-background;

  &__body {
    border: 1px solid $color-black;
  }
}

.flying-tab-panel-header {
  $header-height: 59px;
  height: $header-height;
  display: flex;

  &__wrapper {
    flex-grow: 1;
    display: flex;
  }

  &__button {
    flex-grow: 1;
    border: 1px solid $color-black;
    background: $color-gray-2;
    cursor: pointer;
    outline: none;
    color: $color-text-op-50;
    padding: 0;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;

    img {
      margin: 0 auto;
    }

    &--current {
      background: $color-dark;
      color: $color-text;
    }

    &--close {
      flex-shrink: 0;
      flex-grow: unset;
      width: $header-height;
      color: $color-text-op-50;
      font-size: 0;
      transition: background-color $base-animation;

    }
  }

}
</style>
