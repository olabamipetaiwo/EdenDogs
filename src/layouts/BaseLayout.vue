<template>
  <main class="w-full min-h-screen flex flex-col">
    <app-header />
    <slot />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "BaseLayout",
  components: {
    AppHeader,
  },
};
</script>
