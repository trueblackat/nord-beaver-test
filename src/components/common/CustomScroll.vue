<template>
  <div
    v-if="isShowed"
    class="custom-scroll"
  >
    <div
      class="custom-scroll__thumb"
      :style="thumbStyles"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { IScrollData } from '../../types/scroll.ts';

const props = defineProps<{
  scrollData: IScrollData;
}>();

const isShowed = computed(() => props.scrollData.viewHeight < props.scrollData.scrollHeight);
const thumbStyles = computed(() => ({
  height: `${Math.round((props.scrollData.viewHeight / props.scrollData.scrollHeight) * 100)}%`,
  top: `${Math.round((props.scrollData.scrollTop / props.scrollData.scrollHeight) * 100)}%`,
}));
</script>

<style lang="scss">
.custom-scroll {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: $color-gray;

  &__thumb {
    position: absolute;
    left: -1px;
    top: 0;
    width: 3px;
    background: $color-light-gray-2;
  }
}
</style>
