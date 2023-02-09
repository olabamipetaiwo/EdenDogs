<template>
  <BaseLayout>
    <section class="flex flex-col">
      <BreedsContainer />
      <ImagesContainer />
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import ImagesContainer from "../containers/ImagesContainer.vue";
import BreedsContainer from "@/containers/BreedsContainer";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    BaseLayout,
    ImagesContainer,
    BreedsContainer,
  },
  mounted() {
    this.fetchBreeds();
    // this.fetchBreedDogs({ breed: "hound", initial: true });

    if (this.activeBreed) {
      this.fetchBreedDogs({ breed: this.activeBreed, initial: false });
    } else {
      this.fetchBreedDogs({ breed: "hound", initial: true });
    }
  },
  computed: {
    ...mapState("dogs", ["activeBreed"]),
  },
  methods: {
    ...mapActions("dogs", ["fetchBreeds", "fetchBreedDogs"]),
  },
};
</script>
