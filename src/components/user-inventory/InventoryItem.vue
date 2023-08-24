<template>
  <div
    v-tooltip="item.name"
    class="inventory-item"
  >
    <div
      :class="[
        'inventory-item__image',
        imageBacklightClass,
        {
          'inventory-item__image--darkened': item.cooldown,
        },
      ]"
      :style="{ backgroundImage: `url(${item.imageUrl})` }"
    />

    <div
      v-if="chargesLabel"
      class="inventory-item__charges-label"
      :data-value="chargesLabel"
    />

    <div
      v-if="countLabel"
      class="inventory-item__count-label"
    >
      {{ countLabel }}
    </div>

    <div
      v-if="item.cooldown"
      class="inventory-item__cooldown"
    >
      <svg-icon name="cooldown" />

      <span>{{ cooldownTime }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';
import { IInventoryItem } from '@/types/inventory.ts';
import { EFilterTypes } from '@/types/filters.ts';
import counter from '@/helpers/counter.ts';

const props = defineProps<{ item: IInventoryItem }>();
const { item } = toRefs(props);
const imageBacklightClass = computed(() => {
  switch (item.value.type) {
    case EFilterTypes.ARMOR:
      return 'inventory-item__image--blue-backlight';
    case EFilterTypes.WEAPON:
      return 'inventory-item__image--purple-backlight';
    default:
      return '';
  }
});
const chargesLabel = computed(() => item.value.charges && item.value.maxCharges && `${item.value.charges}/${item.value.maxCharges}`);
const countLabel = computed(() => item.value.count && `x${item.value.count}`);
const cooldownTime = ref('');

if (item.value.cooldown) {
  counter(item.value.cooldown, (formattedTime) => {
    cooldownTime.value = formattedTime;
  });
}
</script>

<style lang="scss">
.inventory-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &__image {
    height: 100%;
    width: 100%;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;

    &--blue-backlight {
      @include itemsDropShadow($color-blue);
    }

    &--purple-backlight {
      @include itemsDropShadow($color-purple);
    }

    &--darkened {
      opacity: 0.37;
    }
  }

  &__charges-label,
  &__count-label {
    position: absolute;
    font-family: $font-family-jetbrains;
    font-weight: 500;
  }

  &__charges-label {
    top: 0;
    left: 0;
    font-size: vw(16px);
    line-height: vw(21px);
    width: 65%;
    height: 38%;
    padding: 0 2px;
    position: absolute;
    background: linear-gradient(
        to right bottom,
        rgba($color-black-2, .65) 0,
        rgba($color-black-2, .65) 50%,
        transparent 50%
    );

    &:before {
      content: attr(data-value);
    }
  }

  &__count-label {
    right: 3px;
    bottom: -3px;
    font-size: vw(17px);
    line-height: vw(22px);
  }

  &__cooldown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: vw(20px);
    line-height: vw(22px);
  }
}
</style>
