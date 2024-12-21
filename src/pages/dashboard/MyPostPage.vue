<template>
  <div class="q-pa-md q-mb-lg q-overflow-auto window-height">
    <q-table
      :grid="$q.screen.xs"
      flat
      bordered
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { columns, rows, pagination } from 'components/ts/MyPostComponent';
</script>
