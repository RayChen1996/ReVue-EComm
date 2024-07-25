<template>
  <div class="min-h-screen">
    <div class="container my-16">
      <div class="flex">
        <div class="w-1/2 bg-primary-200">
          <div class="flex flex-col justify-center items-center">
            <h1 class="font-bold my-10 text-primary-100">您的購物車</h1>
          </div>
        </div>
        <div class="flex-1 bg-primary-100">
          <div className="flex flex-col flex-1">
            <div
              className="w-11/12 m-auto text-white text-2xl font-bold text-center my-2"
            >
              訂單摘要
            </div>
            <hr class="h-1 w-10/12 m-auto mt-4 bg-white" />
          </div>

          <button
            class="w-full bg-primary-400 py-3 text-primary-100 font-bold text-3xl"
          >
            結帳
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
