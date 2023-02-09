<template>
  <section v-if="error" class="flex p-5 bg-red-500">
    <p class="text-white text-sm font-display">
      {{ error || "Error Occured" }}
    </p>
  </section>
</template>

<script>
export default {
  name: "ErrorAlert",
  props: {
    error: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
