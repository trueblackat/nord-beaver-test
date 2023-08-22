<template>
  <svg
    :class="`icon icon-${name}`"
    :style="style"
  >
    <use :href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  name: string;
  width?: string;
  height?: string;
}>();
const { name, width, height } = toRefs(props);
const style = { width: width?.value, height: height?.value };
</script>

<style>
.icon {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
}
</style>
