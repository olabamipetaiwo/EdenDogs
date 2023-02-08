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
