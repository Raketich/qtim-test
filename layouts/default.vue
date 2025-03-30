<script setup lang="ts">
import AppHeader from "@/components/common/AppHeader.vue";
import AppFooter from "@/components/common/AppFooter.vue";
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main">
      <div class="container">
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style>
.layout {
  min-height: 100vh;
  overflow-x: hidden;
}

.layout__main {
  width: 100%;
  padding-top: 121px;
}

.container {
  max-width: 1216px;
  width: 100%;
  margin: 0 auto;
}
</style>
