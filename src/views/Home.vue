<template>
  <BaseLayout>
    <section class="flex flex-col">
      <div class="flex justify-center my-20">
        <div class="flex flex-col items-center hero">
          <h2
            class="font-body font-bold text-green-200 text-4xl mb-8 uppercase text-center"
          >
            Search By Dog Breed
          </h2>

          <div class="load" v-if="fetchingBreeds">
            <spinner />
          </div>

          <div v-else class="w-full">
            <p class="text-center" v-if="allBreeds.length < 1">
              No Breeds at the moment
            </p>
            <CustomSelect
              v-else
              :options="allBreeds"
              class="select"
              @input="handleInput($event)"
            />
          </div>
        </div>
      </div>

      <ImagesContainer />
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import CustomSelect from "@/components/Select.vue";
import ImagesContainer from "../containers/ImagesContainer.vue";
import { cleanCache } from "../utils/cache";

import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: { BaseLayout, CustomSelect, ImagesContainer },
  mounted() {
    cleanCache();
    this.fetchBreeds();
    this.fetchBreedDogs("hound");
  },
  data() {},
  computed: {
    ...mapState("dogs", ["allBreeds", "fetchingBreeds"]),
  },
  methods: {
    ...mapActions("dogs", ["fetchBreeds", "fetchRandomDogs", "fetchBreedDogs"]),
    handleInput(value) {
      if (value) {
        this.fetchBreedDogs(value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 40rem;

  @media (max-width: 630px) {
    width: 80%;
  }
}

.load {
  -webkit-animation: spinner 2s infinite alternate-reverse forwards;
  animation: spinner 2s infinite alternate-reverse forwards;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg) scale(0.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
