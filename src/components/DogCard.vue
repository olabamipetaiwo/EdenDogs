<template>
  <div class="flex flex-col items-start">
    <figure
      class="overflow-hidden rounded-2xl cursor-pointer w-full h-96"
      v-lazyload
    >
      <img
        :data-url="imgURL"
        :alt="`dogs${imgIndex}`"
        class="w-full h-full object-cover origin-center transition-all transform hover:scale-150"
      />
    </figure>

    <div class="w-full flex justify-end mt-4 grid-cols-1">
      <p>{{ imgURL }}</p>
      <button class="btn" @click="this.$router.push(`/dog/view/${imgIndex}`)">
        View Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogCard",
  props: {
    imgURL: {
      type: String,
      required: true,
    },
    imgIndex: {
      type: Number,
      required: true,
    },
    tabindex: {
      type: String,
      required: false,
      default: "fashionava",
    },
  },
};
</script>
