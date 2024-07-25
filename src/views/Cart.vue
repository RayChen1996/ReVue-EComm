<script setup>
import { Plus, Minus, Trash } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="min-h-screen">
    <div class="container my-16">
      <div class="lg:flex">
        <div class="flex-1">
          <div
            class="flex mx-3 bg-primary-200 flex-col justify-center items-center"
          >
            <h1 class="font-bold my-3 text-primary-100">您的購物車</h1>
          </div>
          <table class="table">
            <tbody>
              <tr>
                <td>
                  <img
                    src="/photo-1525203135335-74d272fc8d9c.jpg"
                    class="object-cover w-28"
                    alt=""
                  />
                </td>
                <td class="lg:flex items-center gap-4 justify-around min-h-40">
                  <div class="flex flex-col gap-3">
                    <span class="text-[20px]">焦糖馬卡龍</span>
                    <span> NT$ 450 </span>
                  </div>
                  <div>
                    <div class="join">
                      <button class="btn join-item"><Minus /></button>
                      <input
                        type="text"
                        class="text-center"
                        value="1"
                        name=""
                        id=""
                      />
                      <button class="btn join-item"><Plus /></button>
                    </div>
                  </div>
                  <div>
                    <span class="justify-end flex">NT$ 900</span>
                  </div>
                  <div class="hidden lg:block">
                    <button>
                      <Trash />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="lg:w-1/3 bg-primary-100">
          <div className="flex flex-col flex-1">
            <div
              className="w-11/12 m-auto text-white text-2xl font-bold text-center my-2"
            >
              訂單摘要
            </div>
            <hr class="h-1 w-10/12 m-auto mt-4 bg-white" />
            <div class="text-white w-10/12 m-auto">
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

          <RouterLink to="/checkout">
            <button
              class="w-full bg-primary-400 py-3 text-primary-100 font-bold text-3xl"
            >
              結帳
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
