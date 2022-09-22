<script setup>
definePageMeta({
  layout: ["guest"],
});
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-base-content"
      >
        Register an account
      </h2>
      <p class="mt-2 text-center text-sm text-base-content">
        Already have an account?
        {{ " " }}
        <nuxt-link href="/signin" class="btn btn-primary btn-xs"
          >Sign in here</nuxt-link
        >
      </p>
    </div>
    <RegisterForm />
    <nuxt-link class="mx-auto mt-2 font-medium text-base underline" to="/">
      Go Home
    </nuxt-link>
  </div>
</template>
