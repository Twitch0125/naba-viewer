<script setup lang="ts">
import type { Message } from "~/stores/notificationStore";
const props = defineProps<{ message: Message }>();

const typeClasses = {
  error: "alert-error",
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
};
const buttonClasses = {
  error: "btn-error",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
};
</script>
<template>
  <div class="toast toast-end">
    <div class="alert" v-bind="$attrs">
      <slot name="text">
        <div>
          <span>
            {{ props.message.text || "" }}
          </span>
        </div>
      </slot>
      <slot name="action">
        <button
          type="button"
          @click="message.action.handler"
          class="btn"
          :class="buttonClasses[message.type]"
        >
          <component
            v-if="message.action.component"
            :is="message.action.component"
          />
          {{ message.action.text || "close" }}
        </button>
      </slot>
    </div>
  </div>
</template>
