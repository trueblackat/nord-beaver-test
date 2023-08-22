<template>
  <svg-sprite />
  <flying-tab-panel :tabs="tabs">
    <user-inventory />
  </flying-tab-panel>
</template>

<script setup lang="ts">
import FlyingTabPanel from '@/components/FlyingTabPanel.vue';
import { ITab } from './types/tabs.ts';
import SvgSprite from './components/common/SvgSprite.vue';
import UserInventory from './components/user-inventory/UserInventory.vue';

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
