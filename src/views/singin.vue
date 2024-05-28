<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-12">
        <form @submit="handleSubmit">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密碼</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              v-model="checked"
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">記住我</label>
          </div>
          <button type="submit" class="btn btn-primary">登入</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { URL, KEY } from "../config/index";
import Cookies from "js-cookie";

const email = ref("");
const password = ref("");
const checked = ref(false);

const handleSubmit = (event: Event) => {
  event.preventDefault();
  // console.log("Email:", email.value);
  // console.log("Password:", password.value);
  // console.log("Checked:", checked.value);

  // console.log(import.meta.env.VITE_BASEURL);
  // console.log(import.meta.env.VITE_KET);

  axios
    .post(`${URL}v2/admin/signin`, {
      username: email.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);

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
