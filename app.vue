<script lang="ts" setup>
//grab headers off the first player
const headers = computed(() => {
  return [];
});
</script>
<template>
  <div>
    <div class="max-w-screen-md p-4 mx-auto">
      <p class="my-6">Drag and drop the data dump here</p>
      <BattingFileUpload />
    </div>
    <BattingTable />
  </div>
</template>
