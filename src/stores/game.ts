import { acceptHMRUpdate, defineStore } from 'pinia'

import _ from 'lodash'
import { deck as cardsDeck } from '~/code/deck'
import type { ICard } from '~/code/interfaces/card.interface'
import type { IPlayer } from '~/code/interfaces/player.interface'

export const useGameStore = defineStore('game', () => {
  const players = ref<Set<IPlayer>>(new Set<IPlayer>())
  const deck = ref<ICard[]>([])

  function addDeck() {
    deck.value = [...deck.value, ...cardsDeck]
  }

  function shuffleDeck() {
    deck.value = _.shuffle(deck.value)
  }

  function dealCard(): ICard {
    return deck.value.shift() as ICard
  }

  function addPlayer(player: IPlayer) {
    players.value.add(player)
  }

  return {
    players,
    addPlayer,

    deck,
    addDeck,
    shuffleDeck,
    dealCard,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
