<template>
  <flying-tab-panel :tabs="tabs">
    <user-inventory
      v-if="isValidCase"
      :case-prop="caseProp"
    />
  </flying-tab-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlyingTabPanel from '@/components/FlyingTabPanel.vue';
import UserInventory from '@/components/user-inventory/UserInventory.vue';
import { ITab } from '../types/tabs.ts';

export default defineComponent({
  name: 'InventoryPage',

  components: {
    FlyingTabPanel,
    UserInventory,
  },

  props: {
    caseProp: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      isValidCase: false,
      tabs: Object.freeze([
        {
          label: 'Backpack',
          current: true,
        },
        {
          label: 'Nexus',
          current: false,
        },
      ] as ITab[]),
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      if (!this.caseProp || !['1', '2', '3'].includes(this.caseProp)) {
        await this.$router.push({ name: 'MainPage', query: { case: '1' } });
      }

      this.isValidCase = true;
    },
  },
});
</script>
