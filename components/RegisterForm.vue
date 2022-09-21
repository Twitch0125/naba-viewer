<script setup>
import { LockClosedIcon } from "@heroicons/vue/24/outline/index.js";
import { useForm, useField } from "vee-validate";
import { string } from "yup";

const email = useField("email", string().email().required());

const password = useField("password", string().required());
const confirmPassword = useField(
  "password-confirm",
  (value) => (value && value === password.value.value) || "Must match password"
);
</script>
<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" action="/api/users" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium text-base-content"
            >Email address*</label
          >
          <div class="mt-1">
            <input
              v-model="email.value.value"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
            <span class="text-error-content">{{
              email.errorMessage.value
            }}</span>
          </div>
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-medium text-base-content"
            >Password*</label
          >
          <div class="mt-1">
            <input
              v-model="password.value.value"
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
            <span class="text-error-content">{{
              password.errorMessage.value
            }}</span>
          </div>
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-base-content"
            >Confirm Password*</label
          >
          <div class="mt-1">
            <input
              v-model="confirmPassword.value.value"
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              autocomplete="new-password"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm relative"
            />
            <Transition
              enter-active-class="duration-150 ease-out transition"
              enter-from-class="-translate-y-2 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="duration-150 ease-out transition"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="-translate-y-2 opacity-0"
            >
              <span
                v-if="confirmPassword.errorMessage.value"
                class="absolute text-sm text-error"
                >{{ confirmPassword.errorMessage.value }}</span
              >
            </Transition>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 gap-2"
          >
            <LockClosedIcon class="w-6 h-6" />
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
