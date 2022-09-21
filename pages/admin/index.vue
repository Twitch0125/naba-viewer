<script setup>
definePageMeta({
  middleware: ["admin"],
});
</script>

<template>
  <div class="container max-w-2xl mx-auto">
    <h1 class="text-2xl font-medium">Batting Stats</h1>
    <p class="my-3">
      Drag and drop the data dump here. The file name usually looks something
      like "player_batting_stats.txt"
    </p>
    <BattingFileUpload />
  </div>
</template>
