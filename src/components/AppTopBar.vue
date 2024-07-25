<script setup>
import { ShoppingBasket, ShoppingCartIcon, Menu } from "lucide-vue-next";
</script>

<template>
  <header class="flex justify-between px-3 items-center">
    <Menu class="w-5 lg:hidden" />
    <div class="">
      <a href="/">
        <img
          src="/logo-all-dark.svg"
          class="w-60 mt-9 hidden lg:block my-10"
          alt=""
        />
      </a>

      <img src="/logotype-lg-dark.svg" class="w-60 lg:hidden" alt="" />
    </div>
    <div class="flex items-center gap-4">
      <nav class="gap-[60px] mr-[79px] hidden lg:flex">
        <RouterLink to="/" class="no-underline text-primary-100 font-bold"
          >首頁</RouterLink
        >
        <RouterLink
          to="/products"
          class="no-underline text-primary-100 font-bold"
          >甜點</RouterLink
        >
        <RouterLink
          to="/sing-in"
          class="no-underline text-primary-100 font-bold"
          >登入</RouterLink
        >
      </nav>
      <RouterLink to="/cart">
        <ShoppingCartIcon class="text-primary-100" :size="32" />
      </RouterLink>
    </div>
  </header>
</template>
