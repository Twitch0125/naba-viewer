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
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-base-content">
        Don't have an account?
        {{ " " }}
        <nuxt-link href="/register" class="btn btn-xs btn-primary"
          >Register here</nuxt-link
        >
      </p>
    </div>
    <SignInForm />
    <nuxt-link class="mx-auto mt-2 font-medium text-base underline" to="/">
      Go Home
    </nuxt-link>
  </div>
</template>
