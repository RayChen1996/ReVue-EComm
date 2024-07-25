<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="relative">
      <span class="absolute left-4 bg-primary-100 text-white p-2 text-2xl"
        >本 <br />
        日<br />精<br />選</span
      >
      <span class="absolute right-[22px] top-[19px]"><Heart /></span>
      <figure class="min-h-52 max-h-80">
        <img :src="product.imgSrc" class="w-full" alt="" />
      </figure>
    </div>
    <div class="card-body">
      <div class="flex justify-around items-center join">
        <span class="text-primary-100 text-[20px] w-1/2 border-r-2">
          {{ product.name }}
        </span>
        <span class="text-primary-100 font-semibold"
          >NT$ {{ product.price }}</span
        >
      </div>
      <button class="bg-primary-200 py-3 text-primary-100 text-2xl font-bold">
        加入購物車
      </button>
    </div>
  </div>
</template>
