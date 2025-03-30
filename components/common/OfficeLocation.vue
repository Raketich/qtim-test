<script setup lang="ts">
interface Props {
  title: string;
  body: string;
  iconSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 32,
});
</script>

<template>
  <div class="office-location">
    <div class="office-location__title text-s">{{ title }}</div>
    <div class="text-s">{{ body }}</div>
    <div class="office-location__icon">
      <slot>
        <img
          src="/icons/button-location.svg"
          alt="Location"
          :width="iconSize"
          :height="iconSize"
        />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.office-location {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.office-location__icon {
  margin-top: -4px;
}
</style>
