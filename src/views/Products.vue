<script setup>
import { MailIcon, ArrowRight, Heart } from "lucide-vue-next";
import Subscript from "../views/components/Home/subscript.vue";
import ProductItems from "../components/GridItem/ProductCard.vue";
import { ref } from "vue";
const products = ref([
  {
    id: 1,
    name: "焦糖馬卡龍",
    imgSrc: "/photo-1504114133367-631ecd3db3ca.jpg",
    price: 450,
  },
  {
    id: 2,
    name: "焦糖馬卡龍",
    imgSrc: "/photo-1504114133367-631ecd3db3ca.jpg",

    price: 450,
  },
  {
    id: 3,
    name: "焦糖馬卡龍",
    imgSrc: "/photo-1504114133367-631ecd3db3ca.jpg",

    price: 450,
  },
]);
</script>

<template>
  <div class="my-[60px] container">
    <div class="m-auto relative">
      <img
        src="/photo-1512484457149-266d165a4eca.jpg"
        class="w-full mb-[60px]"
        alt=""
      />

      <img
        src="/sm-想吃甜點是不需要理由的.svg"
        class="absolute right-20 top-20 w-40"
        alt=""
      />
    </div>
    <section class="flex">
      <nav class="flex w-1/6 flex-col text-2xl gap-3">
        <button class="bg-primary-100 text-white py-3">甜點類別</button>
        <button class="bg-primary-200 py-3">所有甜點（48）</button>
        <button>本日精選（10）</button>
        <button>人氣推薦（26）</button>
        <button>新品上市（12）</button>
      </nav>

      <div class="flex-1 grid grid-cols-1 gap-4 md:grid-cols-3 mx-auto">
        <ProductItems v-for="p in products" :key="p.id" :product="p" />
      </div>
    </section>
  </div>
</template>
