<template>
  <header class="flex items-center justify-between bg-white py-5 px-12">
    <figure class="w-20 h-12 overflow-hidden rounded-sm mr-4">
      <eden-logo />
    </figure>
    <div class="flex items-center">
      <h6 class="font-body font-bold text-base text-grey-800">
        {{ name }}
      </h6>
    </div>
  </header>
</template>

<script>
import EdenLogo from "./icons/EdenLogo.vue";

export default {
  components: { EdenLogo },
  name: "AppHeader",
  data() {
    return {
      name: "Olabamipe",
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}
</style>
