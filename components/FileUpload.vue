<script setup lang="ts">
const props = defineProps<{
  modelValue: File;
}>();

const dataModel = useVModel(props, "modelValue");

let dragging = $ref(false);
let dragCounter = $ref(0);

const dragEnter = () => {
  dragCounter++;
  if (dragCounter > 0) {
    dragging = true;
  }
};
const dragLeave = () => {
  dragCounter--;
  if (dragCounter === 0) {
    dragging = false;
  }
};

const dropHandler = (event: DragEvent) => {
  dragCounter = 0;
  dragging = false;
  dataModel.value = event.dataTransfer.files[0];
};
const inputHandler = (event: Event) => {
  dragCounter = 0;
  dragging = false;
  dataModel.value = event.target.files[0]; //don't know what to tell ya typescript. Files exists on it
};
</script>

<template>
  <div class="sm:border-t sm:border-gray-200 sm:pt-5">
    <div
      @drop.stop.prevent="dropHandler"
      @dragenter.stop.prevent="dragEnter"
      @dragover.stop.prevent
      @dragleave.stop.prevent="dragLeave"
      class="sm:mt-0 sm:col-span-2 mt-1"
    >
      <div
        :class="`w-full flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ${
          dragging
            ? 'bg-primary-focus text-primary-content'
            : 'bg-primary bg-opacity-5 text-primary'
        }`"
      >
        <div class="space-y-1 text-center">
          <svg
            class="w-12 h-12 mx-auto"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="{2}"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="flex text-sm">
            <label
              for="file-upload"
              class="btn btn-xs"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                @input="inputHandler"
                name="file-upload"
                type="file"
                class="sr-only"
                accept=".csv,.txt"
              />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p v-if="dragging" class="text-lg font-medium text-white">
            Release to upload
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
