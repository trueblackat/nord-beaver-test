<template>
  <flying-tab-panel :tabs="tabs">
    <user-inventory
      v-if="isValidCase"
      :case-prop="caseProp"
    />
  </flying-tab-panel>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import FlyingTabPanel from '@/components/FlyingTabPanel.vue';
import UserInventory from '@/components/user-inventory/UserInventory.vue';
import { ITab } from '@/types/tabs.ts';

const router = useRouter();
const props = defineProps<{caseProp?: string}>();

const isValidCase = ref(false);
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

const allowedCases = ['1', '2', '3'];

onMounted(async () => {
  if (!props.caseProp || !allowedCases.includes(props.caseProp)) {
    await router.push({ name: 'MainPage', query: { case: '1' } });
  }

  isValidCase.value = true;
});
</script>
