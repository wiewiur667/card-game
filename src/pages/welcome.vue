<script lang="ts" setup>
const name = ref('')

</script>
<template>
  <div class="flex flex-col items-center justify-center h-screen w-screen">
    <h1 class="text-3xl">
      Welcome to The Cards Game, {{ name }}!
    </h1>
    <div class="flex flex-col items-center justify-center">
      <input v-model="name" class="mb-3" type="text" placeholder="Enter your name">
      <button class="px-5 py-2 bg-blue-400 rounded-md">
        Enter
      </button>
    </div>
  </div>
</template>
