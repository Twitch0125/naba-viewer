<script setup lang="ts">
import { useNotifcationStore } from "~~/stores/notificationStore";

const store = useNotifcationStore();
</script>
<template>
  <div class="absolute">
    <TransitionGroup
      leave-active-class="transform-all duration-75 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseMessage
        v-for="message in store.messages"
        :message="message"
        :key="message.text"
      />
    </TransitionGroup>
  </div>
</template>
