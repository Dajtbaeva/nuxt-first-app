<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Main page</h1>
  </div>
  <IconsBell />
  <ContentDoc />
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup>
// import authGlobal from "~/middleware/auth.global";

// const { $sayHello } = useNuxtApp();
// const { sayHello } = useUtils();
// $sayHello("Darina");

// auth.ts without global
// definePageMeta({
//   middleware: "auth",
// });

// const counter = useCounter();

import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();
console.log(store);
</script>

<style scoped></style>
