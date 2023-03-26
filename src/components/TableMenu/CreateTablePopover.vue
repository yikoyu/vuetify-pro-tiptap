<script lang="ts">
export interface GridSize {
  rows: number
  cols: number
}

export interface CreateTablePayload extends GridSize {
  withHeaderRow: boolean
}
</script>

<script setup lang="ts">
import { useLocale } from '@/locales'
import { reactive, ref, unref } from 'vue'

const INIT_GRID_SIZE = 6
const MAX_GRID_SIZE = 10
const DEFAULT_SELECTED_GRID_SIZE = 2

interface Props {
  dark?: false
}

interface Emits {
  (event: 'create-table', payload: CreateTablePayload): void
}

withDefaults(defineProps<Props>(), {
  dark: false
})

const emit = defineEmits<Emits>()

const { t } = useLocale()

const menu = ref<boolean>(false)
const withHeaderRow = ref<boolean>(true)
const tableGridSize = reactive<GridSize>({
  rows: INIT_GRID_SIZE,
  cols: INIT_GRID_SIZE
})

const selectedTableGridSize: GridSize = reactive<GridSize>({
  rows: DEFAULT_SELECTED_GRID_SIZE,
  cols: DEFAULT_SELECTED_GRID_SIZE
})

function selectTableGridSize(rows: number, cols: number): void {
  if (rows === tableGridSize.rows) {
    tableGridSize.rows = Math.min(rows + 1, MAX_GRID_SIZE)
  }

  if (cols === tableGridSize.cols) {
    tableGridSize.cols = Math.min(cols + 1, MAX_GRID_SIZE)
  }

  selectedTableGridSize.rows = rows
  selectedTableGridSize.cols = cols
}

function onMouseDown(rows: number, cols: number) {
  emit('create-table', { rows, cols, withHeaderRow: unref(withHeaderRow) })
  resetTableGridSize()
}

function resetTableGridSize(): void {
  menu.value = false
  withHeaderRow.value = true

  tableGridSize.rows = INIT_GRID_SIZE
  tableGridSize.cols = INIT_GRID_SIZE

  selectedTableGridSize.rows = DEFAULT_SELECTED_GRID_SIZE
  selectedTableGridSize.cols = DEFAULT_SELECTED_GRID_SIZE
}
</script>

<template>
  <VMenu v-model="menu" location="end bottom" open-on-hover :close-on-content-click="false" :dark="dark">
    <template #activator="{ props }">
      <slot name="activator" v-bind="{ props }"></slot>
    </template>

    <VCard density="compact" class="table-grid-size-editor">
      <VCardText class="pa-2 pb-0">
        <VCheckbox v-model="withHeaderRow" density="compact" hide-details :label="t('editor.table.menu.insert_table.with_header_row')"></VCheckbox>
      </VCardText>
      <VCardText class="d-flex flex-column flex-wrap justify-space-between pa-2">
        <div v-for="row in tableGridSize.rows" :key="'r' + row" class="d-flex">
          <div
            v-for="col in tableGridSize.cols"
            :key="'c' + col"
            :class="{
              'table-grid-size-editor__cell--selected': col <= selectedTableGridSize.cols && row <= selectedTableGridSize.rows
            }"
            class="pa-1"
            @mouseover="selectTableGridSize(row, col)"
            @mousedown="onMouseDown(row, col)"
          >
            <div class="table-grid-size-editor__cell__inner"></div>
          </div>
        </div>
      </VCardText>
      <VCardSubtitle class="pt-0 pb-2">{{ selectedTableGridSize.rows }} x {{ selectedTableGridSize.cols }}</VCardSubtitle>
    </VCard>
  </VMenu>
</template>
