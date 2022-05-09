<script lang="ts" setup>
import { CardSuite } from '~/code/card-suite'

const props = defineProps<{
  value: string
  suite: CardSuite
  isHidden: boolean
}>()

const emit = defineEmits<{
  (e: 'card-selected', selected: boolean): void
}>()

const isHovering = ref(false)
const isSelected = ref(false)

const cardLayout: Record<string, { layout: string[]; figure: string; text: string }> = {
  joker: {
    layout: ['col-start-1 col-end-4 row-start-1 row-end-5 w-96'],
    figure: props.suite,
    text: 'Joker',
  },
  two: {
    layout: [
      'col-start-2 row-start-1',
      'col-start-2 row-start-4',
    ],
    figure: props.suite,
    text: '2',
  },
  three: {
    layout: [
      'col-start-2 row-start-1',
      'col-start-2 row-start-2 row-end-4',
      'col-start-2 row-start-4',
    ],
    figure: props.suite,
    text: '3',
  },
  four: {
    layout: [
      'col-start-1 row-start-1',
      'col-start-3 row-start-1',
      'col-start-1 row-start-4',
      'col-start-3 row-start-4',
    ],
    figure: props.suite,
    text: '4',
  },
  five: {
    layout: [
      'col-start-1 row-start-1',
      'col-start-3 row-start-1',
      'col-start-2 row-start-1 row-end-5',
      'col-start-1 row-start-4',
      'col-start-3 row-start-4',
    ],
    figure: props.suite,
    text: '5',
  },
  six: {
    layout: [
      'col-start-1 row-start-1',
      'col-start-3 row-start-1',
      'col-start-1 row-start-1 row-end-5',
      'col-start-3 row-start-1 row-end-5',
      'col-start-1 row-start-4',
      'col-start-3 row-start-4',
    ],
    figure: props.suite,
    text: '6',
  },
  seven: {
    layout: [
      'col-start-1 row-start-1',
      'col-start-3 row-start-1',
      'col-start-2 row-start-2',
      'col-start-1 row-start-1 row-end-5',
      'col-start-3 row-start-1 row-end-5',
      'col-start-1 row-start-4',
      'col-start-3 row-start-4',
    ],
    figure: props.suite,
    text: '7',
  },
  eight: {
    layout: [
      'col-start-1 row-start-1',
      'col-start-3 row-start-1',
      'col-start-2 row-start-1 row-end-4',
      'col-start-1 row-start-1 row-end-5',
      'col-start-3 row-start-1 row-end-5',
      'col-start-2 row-start-3 row-end-5',
      'col-start-1 row-start-4',
      'col-start-3 row-start-4',
    ],
    figure: props.suite,
    text: '8',
  },
  nine: {
    layout: [
      'col-start-1 row-start-1',
      'col-start-3 row-start-1',
      'col-start-1 row-start-2',
      'col-start-3 row-start-2',
      'col-start-2 row-start-1 row-end-5',
      'col-start-1 row-start-3',
      'col-start-3 row-start-3',
      'col-start-1 row-start-4',
      'col-start-3 row-start-4',
    ],
    figure: props.suite,
    text: '9',
  },
  ten: {
    layout:
  [
    'col-start-1 row-start-1',
    'col-start-3 row-start-1',
    'col-start-1 row-start-2',
    'col-start-3 row-start-2',
    'col-start-2 row-start-1 row-end-3',
    'col-start-2 row-start-3 row-end-5',
    'col-start-1 row-start-3',
    'col-start-3 row-start-3',
    'col-start-1 row-start-4',
    'col-start-3 row-start-4',
  ],
    figure: props.suite,
    text: '10',
  },
  jack: {
    layout: [
      'col-start-1 col-end-4 row-start-1 row-end-5 w-96',
    ],
    figure: 'jack',
    text: 'J',
  },
  queen: {
    layout: [
      'col-start-1 col-end-4 row-start-1 row-end-5 w-96',
    ],
    figure: 'queen',
    text: 'Q',
  },
  king: {
    layout: [
      'col-start-1 col-end-4 row-start-1 row-end-5 w-96',
    ],
    figure: 'king',
    text: 'K',
  },
  ace: {
    layout: [
      'col-start-1 col-end-4 row-start-1 row-end-5 w-96',
    ],
    figure: props.suite,
    text: 'A',
  },
}

function getAsset(asset: string) {
  if (asset)
    return new URL(`../../assets/cards/${asset.toLowerCase()}.svg`, import.meta.url).href
  return ''
}

function getCard(value: string): { layout: string[]; figure: string; text: string } {
  return cardLayout[value]
}

function onClick() {
  isSelected.value = !isSelected.value
  emit('card-selected', isSelected.value)
}

function cardClass() {
  let classText = ''
  if (props.suite === CardSuite.Hearts || props.suite === CardSuite.Tiles)
    classText += 'text-red-500'
  if (props.value === 'joker')
    classText += ' write-vertical-left write-orient-upright text-5xl0'
  return classText
}

</script>
<template>
  <div
    class="bg-light-300 rounded-[0.2em] h-full game-card"
    style="aspect-ratio: 63/88;"
    :class="{'hovering': isHovering, 'selected': isSelected}"
    @click="onClick"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div v-if="!isHidden" class="relative w-full h-full flex justify-center p-[1.5em] text-[1em] pointer-events-none">
      <div class="absolute text-black text-[0.75em] top-[0.5em] left-[0.5em]">
        <span
          :class="cardClass()"
        >{{
          getCard(value)?.text
        }}</span>
        <img v-if="getCard(value)?.text != 'Joker'" class="mt-[0.25em] h-[0.66em]" :src="getAsset(suite)" :alt="suite">
      </div>
      <div class="w-full h-full text-black flex justify-center items-center">
        <div class="card-face grid grid-cols-3 grid-rows-4 w-full items-center h-full w-full">
          <img
            v-for="(item, index) in getCard(value)?.layout"
            :key="index"
            class="justify-self-center"
            :class="item"
            :src="getAsset(getCard(value)?.figure)"
            :alt="getCard(value)?.figure"
          >
        </div>
      </div>
      <div class="absolute text-black text-[0.75em] bottom-[0.5em] right-[0.5em]">
        <img v-if="getCard(value)?.text != 'Joker'" class="mb-[0.25em] h-[0.66em]" :src="getAsset(suite)" :alt="suite">
        <span
          :class="cardClass()"
        >{{
          getCard(value)?.text
        }}</span>
      </div>
    </div>
    <div v-else>
      <img class="w-full h-full pointer-events-none" :src="getAsset('reverse-a')" alt="reverse">
    </div>
  </div>
</template>
