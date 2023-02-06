/* eslint-disable vue/no-parsing-error */
<template>
  <!-- card -->
  <div class="w-full bg-white rounded shadow-2xl">
    <!-- image -->
    <div class="h-32 bg-gray-200 rounded-tr rounded-tl animate-pulse"></div>

    <div class="p-5">
      <!-- title -->
      <div class="h-6 rounded-sm bg-gray-200 animate-pulse mb-4"></div>

      <!-- content -->
      <div class="grid grid-cols-4 gap-1">
        <div class="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
        <div class="h-4 rounded-sm bg-gray-200 animate-pulse"></div>

        <div class="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
        <div class="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

        <div class="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
        <div class="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
        <div class="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
        <div class="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
}
</script>

