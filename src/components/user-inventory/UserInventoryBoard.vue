<template>
  <div
    ref="board"
    class="user-inventory-board"
    @scroll="onUpdateScroll"
  >
    <template v-for="(item, index) in resultItems">
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
import {
  computed, nextTick, ref, toRefs, watch,
} from 'vue';
import { IInventoryItem } from '../../types/inventory.ts';
import getModuledCount from '../../helpers/getModuledCount.ts';
import InventoryItem from './InventoryItem.vue';

const props = defineProps<{
  items: IInventoryItem[],
}>();
const { items } = toRefs(props);

// Items count calculating
const minRows = 8;
const itemsPerRow = 5;
const minItems = minRows * itemsPerRow;
const resultItems = computed(() => [
  ...items.value,
  ...Array(getModuledCount(items.value.length, minItems, itemsPerRow)),
]);

// Scrolling
const board = ref();
const emits = defineEmits(['update-scroll']);
const onUpdateScroll = async () => {
  if (board.value) {
    await nextTick();
    emits('update-scroll', board.value);
  }
};

watch(items, () => { onUpdateScroll(); }, { immediate: true });
</script>

<style lang="scss">
.user-inventory-board {
  display: flex;
  flex-wrap: wrap;
  aspect-ratio: 5/8;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    flex-shrink: 0;
    width: 20%;
    aspect-ratio: 1/1;
    border: 1px solid $color-gray;
  }
}
</style>
