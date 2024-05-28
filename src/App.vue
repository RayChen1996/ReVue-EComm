<script setup lang="ts">
import AppTop from "./components/AppTopBar.vue";
</script>

<template>
  <div>
    <AppTop />
    <nav class="flex">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <RouterLink to="/sing-in"> 登入 </RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
    <footer></footer>
  </div>
</template>

<style scoped></style>
