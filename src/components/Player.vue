<script lang="ts" setup>
import { ICard } from '../code/interfaces/card.interface'

defineProps<{
  cards: ICard[]
}>()
</script>

<template>
  <div class="flex flex-row">
    <Hand :cards="cards" />
  </div>
</template>
