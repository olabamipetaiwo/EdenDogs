/* eslint-disable vue/no-parsing-error */
<template>
  <!-- card -->
  <div class="w-full bg-white rounded shadow-2xl">
    <!-- image -->
    <div
      class="h-64 bg-green-200 bg-opacity-5 rounded-tr rounded-tl animate-pulse"
    ></div>

    <div class="p-5">
      <div
        class="h-6 rounded-sm bg-green-200 bg-opacity-10 animate-pulse mb-4"
      ></div>

      <div class="grid grid-cols-4 gap-1">
        <div
          class="col-span-3 h-4 rounded-sm bg-green-200 bg-opacity-10 animate-pulse"
        ></div>
        <div
          class="h-4 rounded-sm bg-green-200 bg-opacity-10 animate-pulse"
        ></div>
        <div
          class="col-span-3 h-4 rounded-sm bg-green-200 bg-opacity-10 animate-pulse"
        ></div>
        <div
          class="h-4 rounded-sm bg-green-200 bg-opacity-10 animate-pulse"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>
