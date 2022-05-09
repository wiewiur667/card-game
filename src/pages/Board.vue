<script setup lang="ts">
import type { ICard } from '~/code/interfaces/card.interface'
import type { IPlayer } from '~/code/interfaces/player.interface'
import Card from '~/components/Card.vue'

import { useGameStore } from '~/stores/game'
const game = useGameStore()

game.addPlayer({
  id: 'player-1',
  cards: [] as ICard[],
  name: 'Player 1',
} as IPlayer)

game.addPlayer({
  id: 'player-2',
  cards: [] as ICard[],
  name: 'Player 2',
} as IPlayer)

game.addDeck()

game.shuffleDeck()

const topCard = game.deck[game.deck.length - 1]
const [currentPlayer] = game.players

function dealCard() {
  if (game.deck.length > 0) {
    const card = game.dealCard()
    card.id = `card-${game.deck.length}`
    currentPlayer.cards.push(card)
  }
}

</script>

<template>
  <div class="bg-green-700 flex flex-col h-screen relative">
    <div class="w-full p-3 bg-light-800">
      <pre>Deck: Number of cards: {{ game.deck.length }}; Top Card: {{ topCard.value }} of {{ topCard.suite }}  </pre>
      <pre>Current player: {{ currentPlayer.id }}; {{ currentPlayer.name }}; Number of cards: {{ currentPlayer.cards.length }} </pre>
    </div>
    <div class="stack justify-center items-center inline-flex flex-col">
      <div class="relative">
        <Card :value="topCard.value" :suite=" topCard.suite" :is-hidden="true" @click="dealCard()" />
      </div>
      <span class="text-light-800">Stack</span>
    </div>
    <Hand :cards="currentPlayer.cards" class="game-hand" />
  </div>
</template>
