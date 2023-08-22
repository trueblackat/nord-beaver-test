<template>
  <div class="user-inventory">
    <div class="user-inventory__filters">
      <button
        v-for="filterButton in filterButtons"
        :key="filterButton.type"
        :class="[
          'user-inventory-filter-button',
          { 'user-inventory-filter-button--current': filterButton.type === currentFilterType },
        ]"
        :title="filterButton.label"
        type="button"
        @click="setCurrentFilterType(filterButton.type)"
      >
        <svg-icon
          class="untouchable"
          :name="filterButton.icon"
          :width="filterButton.width"
          :height="filterButton.height"
        />
      </button>
    </div>

    <div class="user-inventory__body">
      <div class="user-inventory__filter-label">
        {{ currentFilter.label }}
      </div>

      <div class="user-inventory__board" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { filterButtons } from './constants.ts';
import { EFilterTypes } from '../../types/filters.ts';

const currentFilterType = ref(filterButtons[0].type);
const setCurrentFilterType = (filterType: EFilterTypes) => {
  currentFilterType.value = filterType;
};
const currentFilter = computed(() => filterButtons.find(
  (filterButton) => filterButton.type === currentFilterType.value,
));
</script>

<style lang="scss">
.user-inventory {
  display: flex;

  &__filters {
    flex-shrink: 0;
    width: 64px;
    border-right: 1px solid $color-black;
    background: $color-gray-2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  &__body {
    padding: 13px 19px 16px 15px;
    flex-grow: 1;
  }

  &__filter-label {
    font-size: 20px;
    line-height: 22px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }

  &__board { grid-area: board; }
}

.user-inventory-filter-button {
  background: none;
  border: none;
  padding: 10px 0;
  font-size: 0;
  color: $color-text-op-50;
  cursor: pointer;
  width: 100%;
  transition: color $base-animation;
  outline: none;

  &:hover:not(&--current) {
    color: $color-text-op-80;
  }

  &--current {
    color: $color-text;
  }
}

</style>
