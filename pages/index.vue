<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Main page</h1>
  </div>
  <IconsBell />
  <!-- <ContentDoc /> -->
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <p>{{ pending ? "Loading..." : productCount }}</p>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script setup lang="ts">
// import authGlobal from "~/middleware/auth.global";

// const { $sayHello } = useNuxtApp();
// const { sayHello } = useUtils();
// $sayHello("Darina");

// auth.ts without global
// definePageMeta({
//   middleware: "auth",
// });

// const counter = useCounter();

// import { useCounterStore } from "~/stores/myStore";
// const store = useCounterStore();
// console.log(store);

// const { data: products } = await useFetch("api/products");
// const { data: products, pending } = await useLazyFetch("/api/products");
const { data: productCount, pending } = await useAsyncData("products", () =>
  $fetch("/api/products")
);
const refresh = () => refreshNuxtData("products");

useHead({
  title: "Home page for Nuxt course",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<style scoped></style>
