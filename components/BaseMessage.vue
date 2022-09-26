<script setup lang="ts">
import type { Message } from "~/stores/notificationStore";
const props = defineProps<{ message: Message }>();
</script>
<template>
  <div class="toast toast-end">
    <div class="alert">
      <div>
        <span>
          {{ props.message.text || "" }}
        </span>
      </div>
      <button
        type="button"
        @click="props.message.action.handler"
        class="btn btn-circle"
      >
        {{ props.message.action.text || "close" }}
      </button>
    </div>
  </div>
</template>
