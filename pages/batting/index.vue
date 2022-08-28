<script lang="ts" setup></script>
<template>
  <div>
    <div class="container max-w-2xl mx-auto">
      <h1 class="text-2xl font-medium">Batting Stats</h1>
      <p class="my-3">Drag and drop the data dump here</p>
      <BattingFileUpload />
    </div>
    <div class="">
      <BattingTable />
    </div>
  </div>
</template>
