<script setup>
import { MailIcon, ArrowRight } from "lucide-vue-next";
</script>
<template>
  <div class="bg-primary-100 p-6">
    <div class="lg:flex justify-around">
      <div
        class="items-center gap-4 flex max-md:mb-4 md:mb-0 lg:mb-0 justify-center"
      >
        <img src="/logo-light.svg" class="w-20" alt="" />
        <span class="text-2xl text-white">訂閱你我的甜蜜郵件</span>
      </div>
      <label class="flex items-center bg-primary-200">
        <MailIcon size="50" class="text-primary-100 mx-3" fill />
        <input type="text" name="" id="" class="w-full bg-primary-200 h-full" />

        <button class="bg-primary-400 p-3 h-full"><ArrowRight /></button>
      </label>
    </div>
  </div>
</template>
