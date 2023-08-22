<template>
  <svg-sprite />
  <flying-tab-panel :tabs="tabs" />
</template>

<script setup lang="ts">
import FlyingTabPanel from '@/components/FlyingTabPanel.vue';
import { ITab } from './types/tabs.ts';
import SvgSprite from './components/common/SvgSprite.vue';

const tabs: ITab[] = [
  {
    label: 'Backpack',
    current: true,
  },
  {
    label: 'Nexus',
    current: false,
  },
];
</script>
