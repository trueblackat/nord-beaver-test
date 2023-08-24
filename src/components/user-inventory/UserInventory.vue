<template>
  <div class="user-inventory">
    <div class="user-inventory__filters">
      <button
        v-for="filterButton in filterButtons"
        :key="filterButton.type"
        :class="[
          'user-inventory-filter-button',
          { 'user-inventory-filter-button--current': filterButton.type === currentFilter.type },
        ]"
        :title="filterButton.label"
        type="button"
        @click="setCurrentFilter(filterButton)"
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

      <div class="user-inventory__scroll-wrapper">
        <user-inventory-board
          :items="filteredInvertoryItems"
          @update-scroll="onBoardScroll"
        />

        <custom-scroll
          v-if="scrollData"
          :scroll-data="scrollData"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { filterButtons } from './constants.ts';
import UserInventoryBoard from './UserInventoryBoard.vue';
import { getInventoryEndpoint } from '../../api/endpoints/inventory.ts';
import { IInventoryItem } from '../../types/inventory.ts';
import { EFilterTypes, IFilter } from '../../types/filters.ts';
import CustomScroll from '../common/CustomScroll.vue';
import { getScrollDataFromElement } from '../../helpers/scroll.ts';

const props = defineProps<{ caseProp: string }>();

// Filter state
const currentFilter = ref(filterButtons[0]);
const setCurrentFilter = (filter: IFilter) => {
  currentFilter.value = filter;
};

// Inventory list
const inventoryItems = ref([] as IInventoryItem[]);
const getInventory = async () => {
  try {
    if (!props.caseProp) throw new Error('Case param is required!');

    const { inventory } = await getInventoryEndpoint(props.caseProp);

    inventoryItems.value = inventory;
  } catch (e) {
    console.error(e);
  }
};
const filteredInvertoryItems = computed(() => inventoryItems.value.filter(
  (item) => [EFilterTypes.ALL, item.type].includes(currentFilter.value.type),
));

// Scroll
const scrollData = ref();
const onBoardScroll = (el) => {
  scrollData.value = getScrollDataFromElement(el);
};

onMounted(() => {
  getInventory();
});
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
    padding: 12px 18px 15px 14px;
    flex-grow: 1;
  }

  &__scroll-wrapper {
    position: relative;

    .custom-scroll {
      right: -9px;
    }
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
