<template>
  <section class="grid lg:grid-cols-4 gap-8 my-20 px-12" v-if="fetchingDogs">
    <loader v-for="_item in this.loaders" :key="_item" />
  </section>
  <section
    v-else
    class="grid grid-cols-1 md:grid-cols -2 lg:grid-cols-3 gap-8 px-12 my-10 lg:my-20"
  >
    <p class="text-center" v-if="allDogs.length < 1">
      No Dog pictures at the moment
    </p>

    <DogCard
      v-else
      v-for="(imgURL, index) in allDogs"
      :key="index"
      :imgURL="imgURL"
      :imgIndex="index"
    />

    <!-- <div
      v-else
      v-for="(imgURL, index) in allDogs"
      :key="index"
      class="flex flex-col items-start"
    >
      <figure
        class="overflow-hidden rounded-2xl cursor-pointer w-full h-96"
        v-lazyload
      >
        <img
          :data-url="imgURL"
          :alt="`dogs${index}`"
          class="w-full h-full object-cover origin-center transition-all transform hover:scale-150"
        />
      </figure>

      <div class="w-full flex justify-end mt-4 grid-cols-1">
        <p>{{ imgURL }}</p>
        <button class="btn" @click="this.$router.push(`/dog/view/${index}`)">
          View Details
        </button>
      </div>
    </div> -->
  </section>
</template>

<script>
import { mapState } from "vuex";
import Loader from "@/components/Loader.vue";
import DogCard from "../components/DogCard.vue";

export default {
  name: "ImagesContainer",
  components: { Loader, DogCard },
  data() {
    return {
      loaders: Array(4)
        .fill()
        .map((v) => v),
    };
  },
  computed: {
    ...mapState("dogs", ["allDogs", "fetchingDogs"]),
  },
};
</script>
