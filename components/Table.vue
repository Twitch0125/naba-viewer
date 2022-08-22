<script lang="ts" setup>
import { TableHeader } from "./Table";

interface TableProps {
  items: any[];
  /** the key of the item to use as the row key */
  itemKey?: string;
  headers: TableHeader[];
}
const props = withDefaults(defineProps<TableProps>(), {
  itemKey: "id",
  headers: () => [],
});
</script>

<template>
  <div class="sm:px-6 lg:px-8 px-4">
    <div class="flex flex-col mt-8">
      <div class="sm:-mx-6 lg:-mx-8 -mx-4 -my-2">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="ring-1 ring-black ring-opacity-5 shadow-sm">
            <table class="min-w-full border-separate" style="border-spacing: 0">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-for="header in headers"
                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter first:pl-6 last:pr-6"
                  >
                    {{ header.name }}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(item, itemIndex) in items"
                  :key="itemKey ? item[itemKey] : item.id"
                >
                  <td
                    v-for="header in headers"
                    class="first:pl-6 last:pr-6"
                    :key="`${itemKey ? item[itemKey] : item.id}-${header.name}`"
                  >
                    {{ item[header.name] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.table-cols {
  border-spacing: 0;
  grid-template-columns: repeat(v-bind("headers.length"), minmax(0, 1fr));
}
</style>
