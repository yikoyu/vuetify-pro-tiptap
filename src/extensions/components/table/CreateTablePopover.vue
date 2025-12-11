<script setup lang="ts">
import type { StyleValue } from 'vue'
import type { CreateTablePayload, GridSize } from './type'

import { reactive, ref, unref } from 'vue'
import { TABLE_DEFAULT_SELECTED_GRID_SIZE, TABLE_INIT_GRID_SIZE, TABLE_MAX_GRID_SIZE } from '@/constants/define'
import { useLocale } from '@/locales'

import { isMobile } from '@/utils/is-mobile'

interface Emits {
  (event: 'createTable', payload: CreateTablePayload): void
}

const emit = defineEmits<Emits>()

const { t } = useLocale()

const menu = ref<boolean>(false)
const withHeaderRow = ref<boolean>(true)
const tableGridSize = reactive<GridSize>({
  rows: isMobile() ? TABLE_MAX_GRID_SIZE : TABLE_INIT_GRID_SIZE,
  cols: isMobile() ? TABLE_MAX_GRID_SIZE : TABLE_INIT_GRID_SIZE,
})

const selectedTableGridSize: GridSize = reactive<GridSize>({
  rows: TABLE_DEFAULT_SELECTED_GRID_SIZE,
  cols: TABLE_DEFAULT_SELECTED_GRID_SIZE,
})

function cellInnerStyles(row: number, col: number): StyleValue {
  const values: StyleValue = {
    boxSizing: 'border-box',
    width: '16px',
    height: '16px',
    padding: '4px',
    border: '1px solid #dcdfe6',
    borderRadius: '2px',
  }

  if (col <= selectedTableGridSize.cols && row <= selectedTableGridSize.rows) {
    values.backgroundColor = '#ecf5ff'
    values.borderColor = 'var(--vp-theme-primary)'
  }

  return values
}

function selectTableGridSize(rows: number, cols: number): void {
  if (rows === tableGridSize.rows) {
    tableGridSize.rows = Math.min(rows + 1, TABLE_MAX_GRID_SIZE)
  }

  if (cols === tableGridSize.cols) {
    tableGridSize.cols = Math.min(cols + 1, TABLE_MAX_GRID_SIZE)
  }

  selectedTableGridSize.rows = rows
  selectedTableGridSize.cols = cols
}

function onMouseDown(rows: number, cols: number) {
  emit('createTable', { rows, cols, withHeaderRow: unref(withHeaderRow) })
  resetTableGridSize()
}

function resetTableGridSize(): void {
  menu.value = false
  withHeaderRow.value = true

  tableGridSize.rows = TABLE_INIT_GRID_SIZE
  tableGridSize.cols = TABLE_INIT_GRID_SIZE

  selectedTableGridSize.rows = TABLE_DEFAULT_SELECTED_GRID_SIZE
  selectedTableGridSize.cols = TABLE_DEFAULT_SELECTED_GRID_SIZE
}
</script>

<template>
  <VMenu
    v-model="menu"
    location="end bottom"
    open-on-click
    open-on-hover
    :close-on-content-click="false"
    activator="parent"
  >
    <VCard density="compact">
      <VCardText class="pa-2 pb-0">
        <VCheckbox
          v-model="withHeaderRow"
          density="compact"
          hide-details
          :label="t('editor.table.menu.insert_table.with_header_row')"
        />
      </VCardText>

      <VCardText class="d-flex flex-column flex-wrap justify-space-between pa-2">
        <div v-for="row in tableGridSize.rows" :key="`r${row}`" class="d-flex">
          <div
            v-for="col in tableGridSize.cols"
            :key="`c${col}`"
            class="pa-1"
            @mouseover="selectTableGridSize(row, col)"
            @mousedown="onMouseDown(row, col)"
          >
            <div :style="cellInnerStyles(row, col)" />
          </div>
        </div>
      </VCardText>

      <VCardSubtitle class="pt-0 pb-2">
        {{ selectedTableGridSize.rows }} x {{ selectedTableGridSize.cols }}
      </VCardSubtitle>
    </VCard>
  </VMenu>
</template>
