<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl mb-3">
        Select your role
      </h1>
      <button class="px-6 py-3 bg-blue-400 rounded-md text-light-200 mb-3" @click="$router.push('/player')">
        Player
      </button>
      <button class="px-6 py-3 bg-blue-400 rounded-md text-light-200" @click="$router.push('/server/settings')">
        Server
      </button>
    </div>
  </div>
</template>
