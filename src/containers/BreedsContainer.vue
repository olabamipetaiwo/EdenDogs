<template>
  <section class="flex flex-col">
    <error-alert :error="breedsError" />
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

        <div v-else class="w-full flex items-center justify-center">
          <p class="text-center" v-if="allBreeds.length < 1">
            No Breeds at the moment
          </p>
          <CustomSelect
            v-else
            :options="allBreeds"
            class="select"
            :default="activeBreed"
            @input="handleInput($event)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CustomSelect from "@/components/Select.vue";
import ErrorAlert from "@/components/ErrorAlert.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "BreedsContainer",
  components: { CustomSelect, ErrorAlert },
  data() {},
  computed: {
    ...mapState("dogs", [
      "allBreeds",
      "fetchingBreeds",
      "breedsError",
      "activeBreed",
    ]),
  },
  methods: {
    ...mapActions("dogs", ["fetchBreedDogs"]),
    handleInput(value) {
      if (value) {
        this.fetchBreedDogs({ breed: value, initial: false });
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
