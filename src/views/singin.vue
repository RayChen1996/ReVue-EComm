<template>
  <div class="container my-16">
    <div class="lg:flex">
      <div class="lg:w-1/2 bg-primary-100">
        <div class="flex flex-col justify-center items-center">
          <h1 class="font-bold text-white my-10">會員登入</h1>
          <form
            class="w-full flex flex-col justify-center"
            @submit="handleSubmit"
          >
            <div
              class="mb-3 rounded-none input flex items-center w-11/12 mx-auto gap-3"
            >
              <User2Icon size="20" />

              <input
                v-model="email"
                type="email"
                id="exampleInputEmail1"
                placeholder="電子信箱/手機號碼"
                aria-describedby="emailHelp"
                class="w-full"
              />
            </div>
            <div
              class="mb-3 rounded-none input flex items-center w-11/12 mx-auto gap-3"
            >
              <KeyIcon size="20" />
              <input
                v-model="password"
                type="password"
                placeholder="請輸入使用者密碼"
                class="w-full"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 flex items-center gap-3 w-11/12 mx-auto">
              <input
                v-model="checked"
                class="checkbox checkbox-md checkbox-primary bg-white"
                type="checkbox"
                id="exampleCheck1"
              />
              <label for="exampleCheck1" class="font-bold text-white"
                >記住我</label
              >
            </div>
            <button
              type="submit"
              class="bg-primary-400 w-full py-3 font-bold text-2xl"
            >
              登入帳號

              <span v-if="loading" class="loading"></span>
            </button>
          </form>
        </div>
      </div>
      <div class="flex-1 bg-primary-200">
        <div className="flex flex-col w-full  flex-1">
          <div className="divider divider-neutral w-11/12 mx-auto ">
            連結社群帳號
          </div>

          <button class="bg-primary-300 py-4 w-11/12 m-auto mt-2">
            <img src="/ic-facebook-logotype.svg" class="w-60 m-auto" alt="" />
          </button>
          <button class="bg-primary-300 py-4 w-11/12 m-auto mt-2">
            <img src="/ic-google.svg" alt="" class="w-60 m-auto" />
          </button>
          <button class="bg-primary-300 py-4 w-11/12 m-auto mt-2">
            <img src="/ic-yahoo.svg" alt="" class="w-60 m-auto" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User2Icon, KeyIcon } from "lucide-vue-next";
import { ref } from "vue";
import axios from "axios";
import { URL, KEY } from "../config/index";
import Cookies from "js-cookie";

const email = ref("");
const password = ref("");
const checked = ref(false);
const loading = ref(false);
const handleSubmit = (event) => {
  event.preventDefault();
  // console.log("Email:", email.value);
  // console.log("Password:", password.value);
  // console.log("Checked:", checked.value);

  // console.log(import.meta.env.VITE_BASEURL);
  // console.log(import.meta.env.VITE_KET);

  loading.value = true;

  axios
    .post(`${URL}v2/admin/signin`, {
      username: email.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);

      loading.value = false;
      if (res.data.token) {
        Cookies.set("token", res.data.token, { expires: 7 });
        console.log("Token stored in cookies");

        console.log("Token stored in cookies", Cookies.get("token"));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
