<script setup lang="ts">
import AppHeader from "@/components/common/AppHeader.vue";
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<style>
.layout {
  min-height: 100vh;
  overflow-x: hidden;
}

.layout__main {
  width: 100%;
  max-width: 100vw;
  padding-top: 241px;
}
</style>
