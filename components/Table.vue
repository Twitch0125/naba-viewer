<script lang="ts" setup>
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/solid/index.js";
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
const localItems = ref([]);
const { items } = toRefs(props);
syncRef(items, localItems, { direction: "ltr" });

const sortBy = reactive({ value: null, ascending: true });
const { value: sortByValue } = toRefs(sortBy);
const sortByHistory = useRefHistory(sortByValue, {
  capacity: 3,
  clone: (val) => val /* don't actually need to clone */,
});
const setSort = (header: TableHeader) => {
  console.log("setSort", header);
  if (header !== sortBy.value && sortBy.value !== null) {
    sortByHistory.clear();
  }
  /*first history entry => sortBy = value: 'name', ascending: true
    second history entry => sortBy = value:'name', ascending: false 
    third history entry => sortBy = value: null, ascending: true */
  switch (sortByHistory.history.value.length) {
    case 0:
      sortBy.value = header.name;
      sortBy.ascending = true;
      break;
    case 1:
      sortBy.value = header.name;
      sortBy.ascending = false;
      break;
    case 2:
      sortBy.value = null;
      sortBy.ascending = true;
      sortByHistory.clear();
      break;
  }
};

const sortedItems = computed<any[]>(() => {
  if (sortBy.value) {
    return [...localItems.value].sort((a, b) => {
      if (a[sortBy.value] > sortBy.value) {
        return 1;
      } else if (b[sortBy.value] < sortBy.value) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return localItems.value;
  }
});
</script>

<template>
  <div class="sm:px-6 lg:px-8 px-4">
    sorting: {{ sortBy.value }} ascending?: {{ sortBy.ascending }}
    <div class="flex flex-col mt-8">
      <div class="sm:-mx-6 lg:-mx-8 -mx-4 -my-2">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="ring-1 ring-black ring-opacity-5 shadow-sm">
            <table class="min-w-full border-separate" style="border-spacing: 0">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-for="header in headers"
                    :key="header.name"
                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter first:pl-6 last:pr-6 cursor-pointer"
                    @click="() => setSort(header)"
                  >
                    {{ header.name }}
                    <span v-if="sortBy.value === header.name">
                      <ArrowUpIcon class="w-5 h-5" v-show="sortBy.ascending" />
                      <ArrowDownIcon
                        class="w-5 h-5"
                        v-show="!sortBy.ascending"
                      />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(item, itemIndex) in sortedItems"
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
