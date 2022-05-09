<script lang="ts" setup>
import _ from 'lodash'
import draggable from 'vuedraggable'
import type { ICard } from '~/code/interfaces/card.interface'

const props = defineProps<{
  cards: ICard[]
}>()

const drag = ref(false)

const hovering = ref(false)

const selectedCardIds = ref([])

function onCardSelected(index: number, isSelected: boolean) {
  if (isSelected)
    selectedCardIds.value.push(index)
  else
    selectedCardIds.value = selectedCardIds.value.filter(id => id !== index)
}

watch(selectedCardIds, (newValue, oldValue) => {
  console.log(`Selected cards: ${selectedCardIds.value}`)
}, { deep: true })

</script>

<template>
  <div
    class="p-4 flex flex-row gap-3 items-center justify-between  bg-green-800 overflow-x-auto"
    :class="{ hovering: hovering }"
    @mouseover="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="hand-buttons absolute left-3 -top-3 bg-blue-300 ">
      discard
    </div>
    <draggable
      :list="cards"
      group="cards"
      item-key="id"
      class="h-[13em] flex flex-row gap-3 items-center justify-between"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element, index }">
        <Card
          :value="element.value"
          :suite="element.suite"
          :is-hidden="false"
          @card-selected="(isSelected) => onCardSelected(index, isSelected)"
        />
      </template>
    </draggable>
  </div>
</template>
<style lang="scss" scoped>
.game-card {
  &.hovering {
    border: 2px solid blue;
  }

  &.selected {
    border: 2px solid yellow;
  }
}
</style>
