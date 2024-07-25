<script setup>
import AppTop from "./components/AppTopBar.vue";
import AppFooter from "./components/AppFooter.vue";
import Subscript from "./views/components/Home/subscript.vue";
</script>

<template>
  <div>
    <AppTop />
    <main class="h-full">
      <RouterView />
    </main>
    <Subscript />
    <AppFooter></AppFooter>
  </div>
</template>
