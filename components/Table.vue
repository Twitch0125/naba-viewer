<script lang="ts" setup>
import { TableHeader } from "./Table";
import { UseVirtualList } from "@vueuse/components";

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

const { containerProps, list, wrapperProps } = useVirtualList(props.items, {
  itemHeight: 24,
});
</script>

<template>
  <div class="sm:px-6 lg:px-8 px-4">
    <div class="flex flex-col mt-8">
      <div class="sm:-mx-6 lg:-mx-8 -mx-4 -my-2">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="ring-1 ring-black ring-opacity-5 shadow-sm">
            <table
              v-bind="containerProps"
              class="min-w-full border-separate"
              style="border-spacing: 0; height: 320px"
            >
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
              <tbody
                v-bind="wrapperProps"
                class="bg-white"
                :style="{ height: '320px' }"
              >
                <tr
                  v-for="(item, itemIndex) in list"
                  :key="itemKey ? item.data[itemKey] : item.data.id"
                >
                  <td
                    v-for="header in headers"
                    class="first:pl-6 last:pr-6"
                    :key="`${itemKey ? item.data[itemKey] : item.data.id}-${
                      header.name
                    }`"
                  >
                    {{ item.data[header.name] }}
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
