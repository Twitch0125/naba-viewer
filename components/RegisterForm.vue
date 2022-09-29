<script setup>
import { LockClosedIcon } from "@heroicons/vue/24/outline/index.js";
import { Account } from "appwrite";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useNotifcationStore } from "~~/stores/notificationStore";

const email = ref();
const password = ref();
const passwordConfirm = ref();

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Must match password"),
});

const { client } = useAppwrite();

const register = async () => {
  const account = new Account(client);
  try {
    await account.create("unique()", email.value, passwordConfirm.value);
    await account.createEmailSession(email.value, passwordConfirm.value);
    const router = useRouter();
    router.push("/");
  } catch (err) {
    const notificationStore = useNotifcationStore();
    notificationStore.addMessage({
      text: err?.message || err,
      type: "error",
    });
  }
};
</script>
<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <Form
        :validation-schema="formSchema"
        class="space-y-6"
        @submit="register"
      >
        <div>
          <label for="email" class="block text-sm font-medium text-base-content"
            >Email address*</label
          >
          <div class="mt-1">
            <Field
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
            <ErrorMessage name="email" class="text-error-content" />
          </div>
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-medium text-base-content"
            >Password*</label
          >
          <div class="mt-1">
            <Field
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
            <ErrorMessage name="password" class="text-error-content" />
          </div>
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-base-content"
            >Confirm Password*</label
          >
          <div class="mt-1">
            <Field
              v-model="passwordConfirm"
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              autocomplete="new-password"
              required=""
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
            <ErrorMessage name="passwordConfirm" class="text-error-content" />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <LockClosedIcon class="h-6 w-6" />
            Register
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
