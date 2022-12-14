<script lang="ts" setup>
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/20/solid/index.js";
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

const sortBy = reactive<{ value: string; ascending: boolean }>({
  value: null,
  ascending: true,
});
const setSort = (header: TableHeader) => {
  if (sortBy.value !== header.name) {
    sortBy.value = header.name;
    sortBy.ascending = true;
    return;
  }
  if (sortBy.value === header.name) {
    if (sortBy.ascending) {
      sortBy.ascending = false;
    } else if (sortBy.ascending === false) {
      sortBy.ascending = true;
      sortBy.value = null;
    }
  }
};

const sortedItems = computed<any[]>(() => {
  if (sortBy.value) {
    return [...localItems.value].sort(
      //destructuring the property stored in setBy.value
      ({ [sortBy.value]: valueA }, { [sortBy.value]: valueB }) => {
        if (sortBy.ascending) {
          return valueB - valueA;
        } else {
          return valueA - valueB;
        }
      }
    );
  } else {
    return localItems.value;
  }
});
const page = ref(0);
const itemsPerPage = ref(50);
const itemsToShow = computed(() => {
  return sortedItems.value.slice(page.value, itemsPerPage.value);
});
</script>

<template>
  <div class="sm:px-6 lg:px-8 px-4">
    <div>sorting by: {{ sortBy.value }}</div>
    <div>ascending?: {{ sortBy.ascending }}</div>
    <div>page: {{ page }}</div>
    <div>items per page: {{ itemsPerPage }}</div>
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
                    class="sticky top-0 z-10 border-b uppercase border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-3 text-xs font-medium text-base-content backdrop-blur backdrop-filter first:pl-6 last:pr-6 cursor-pointer"
                    :title="`${header.name}: ${header.description}`"
                    @click="() => setSort(header)"
                  >
                    <div class="relative flex items-center">
                      {{
                        header.display === "tbd" ? header.name : header.display
                      }}
                      <span
                        class="opacity-70 -mr-4"
                        v-show="sortBy.value === header.name"
                      >
                        <ArrowUpIcon
                          class="w-4 h-4"
                          v-show="sortBy.ascending"
                        />
                        <ArrowDownIcon
                          class="w-4 h-4"
                          v-show="!sortBy.ascending"
                        />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(item, itemIndex) in itemsToShow"
                  :key="itemKey ? item[itemKey] : item.id"
                  class="hover:bg-primary hover:bg-opacity-5 group"
                >
                  <td
                    v-for="header in headers"
                    :class="`first:pl-6 group-first:border-0 last:pr-6 border-neutral border-opacity-5 py-2 border-t ${
                      typeof item[header.name] === 'number' && 'font-mono'
                    }`"
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
