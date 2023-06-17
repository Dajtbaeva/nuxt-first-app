<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Main page</h1>
  </div>
  <IconsBell />
</template>

<script setup>
import authGlobal from "~/middleware/auth.global";

const { $sayHello } = useNuxtApp();
// const { sayHello } = useUtils();
$sayHello("Darina");

// auth.ts without global
// definePageMeta({
//   middleware: "auth",
// });
</script>

<style scoped></style>
