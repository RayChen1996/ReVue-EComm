<script setup>
import { Plus, Minus, Trash } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="min-h-screen">
    <div class="container my-16">
      <div class="lg:flex">
        <div class="flex-1 bg-primary-100"></div>
        <div class="lg:w-1/3">
          <div className="flex flex-col flex-1">
            <div
              className="w-11/12 m-auto py-4 bg-primary-200 text-primary-600 text-2xl font-bold text-center my-2"
            >
              訂單摘要
            </div>
            <hr class="h-1 w-10/12 m-auto mt-4 bg-white" />
            <div class="text-primary-600 w-10/12 m-auto">
              <div class="flex justify-between py-2">
                <span>小計</span>
                <span>NT$ 2,700</span>
              </div>
              <div class="flex justify-between py-2">
                <span>運費</span>
                <span>NT$ 300</span>
              </div>
              <div class="flex text-primary-100 justify-between py-2">
                <span>總計</span>
                <span>NT$ 3,000</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div
              className="w-11/12 m-auto py-4 bg-primary-200 text-primary-600 text-2xl font-bold text-center my-2"
            >
              購物清單
            </div>
            <hr class="h-1 w-10/12 m-auto mt-4 bg-white" />
            <div class="text-primary-600 w-10/12 m-auto">
              <div class="flex justify-between py-2">
                <span>小計</span>
                <span>NT$ 2,700</span>
              </div>
              <div class="flex justify-between py-2">
                <span>運費</span>
                <span>NT$ 300</span>
              </div>
              <div class="flex justify-between py-2">
                <span>總計</span>
                <span>NT$ 3,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
