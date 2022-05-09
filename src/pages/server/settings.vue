<script lang="ts" setup>
const games = ref([
  { value: null, label: 'Select a game' },
  { value: 'remik', label: 'Remik' },

])

const selectedGame = ref(null)
const numberOfPlayers = ref(1)
const maxNumberOfPlayers = 6
</script>
<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen">
    <div class="flex flex-col items-center justify-center mb-3">
      <label for="select-game">Game</label>
      <select
        id="select-game" v-model="selectedGame"
        class="block px-2 mb-3 border-0 border-b-2 border-gray-300 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-400"
        placeholder="Select your game"
      >
        <option v-for="(game, index) in games" :key="index" :value="game.value">
          {{ game.label }}
        </option>
      </select>
    </div>

    <div class="flex flex-col items-center justify-center mb-3">
      <label for="select-game">Number of players</label>
      <select
        id="select-game" v-model="numberOfPlayers"
        class="block px-2 mb-3 border-0 border-b-2 border-gray-300 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-400"
        placeholder="Select your game"
      >
        <option v-for="number in maxNumberOfPlayers" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
    </div>
    <button class="px-5 py-2 bg-blue-400 rounded-md text-light-200">
      Create Game
    </button>
  </div>
</template>
