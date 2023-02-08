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

    <div class="w-full flex justify-end mt-4">
      <Button
        color="green"
        customClass="w-full"
        size="md"
        outline="true"
        v-if="getActiveBreed"
        @click="this.$router.push(`/dog/view/${getActiveBreed}/${imgIndex}`)"
      >
        <span class="capitalize">View Details</span>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "./Button.vue";

export default {
  name: "DogCard",
  components: { Button },
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
  computed: {
    ...mapGetters("dogs", ["getActiveBreed"]),
  },
  data() {
    return {
      colors: [
        "gray",
        "yellow",
        "orange",
        "red",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink",
      ],
      sizes: ["lg", "md", "sm"],
    };
  },
};
</script>
