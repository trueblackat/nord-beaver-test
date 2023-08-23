<template>
  <div class="user-inventory-board">
    <template
      v-for="(item, index) in resultItems"
    >
      <inventory-item
        v-if="item"
        :key="`item-${item.id}`"
        :item="item"
        class="user-inventory-board__item"
      />

      <div
        v-else
        :key="`item-${index}`"
        class="user-inventory-board__item"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { IInventoryItem } from '../../types/inventory.ts';
import getModuledCount from '../../helpers/getModuledCount.ts';
import InventoryItem from './InventoryItem.vue';

const props = defineProps<{
  items: IInventoryItem[],
}>();
const { items } = toRefs(props);

const minRows = 8;
const itemsPerRow = 5;
const minItems = minRows * itemsPerRow;

const resultItems = computed(() => [
  ...items.value,
  ...Array(getModuledCount(items.value.length, minItems, itemsPerRow)),
]);
</script>

<style lang="scss">
.user-inventory-board {
  display: flex;
  flex-wrap: wrap;
  aspect-ratio: 5/8;
  overflow: hidden;
  overflow-y: scroll;

  &__item {
    flex-shrink: 0;
    width: 20%;
    aspect-ratio: 1/1;
    border: 1px solid $color-gray;
  }
}
</style>
