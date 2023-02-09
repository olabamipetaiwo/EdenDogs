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
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    BaseLayout,
    ImagesContainer,
    BreedsContainer,
  },
  mounted() {
    this.fetchBreeds();
    this.fetchBreedDogs({ breed: "hound", initial: true });
  },
  data() {},
  methods: {
    ...mapActions("dogs", ["fetchBreeds", "fetchBreedDogs"]),
  },
};
</script>
