<script setup>
import { MailIcon, ArrowRight, Heart } from "lucide-vue-next";
import Subscript from "../views/components/Home/subscript.vue";

import { ref } from "vue";
import BannerImage from "./components/Home/BannerImage.vue";
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
  <BannerImage />

  <div class="flex justify-center items-center my-60">
    <img src="/lg-想吃甜點是不需要理由的.svg" class="w-20" alt="" />
  </div>
  <div
    class="my-[60px] grid grid-cols-1 gap-4 md:grid-cols-3 container mx-auto"
  >
    <div class="card" v-for="d in products" :key="d.id">
      <div class="relative">
        <span class="absolute left-4 bg-primary-100 text-white p-2 text-2xl"
          >本 <br />
          日<br />精<br />選</span
        >
        <span class="absolute right-[22px] top-[19px]"><Heart /></span>
        <figure class="min-h-52 max-h-80">
          <img :src="d.imgSrc" class="w-full" alt="" />
        </figure>
      </div>
      <div class="card-body">
        <div class="flex justify-around">
          <span> {{ d.name }} </span>
          <span>NT$ {{ d.price }}</span>
        </div>
        <Router-Link
          class="bg-primary-200 py-3 text-center text-primary-100 text-2xl font-bold"
          to="/cart"
        >
          <button class="">加入購物車</button>
        </Router-Link>
      </div>
    </div>
  </div>
</template>
