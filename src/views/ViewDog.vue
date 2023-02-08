<template>
  <BaseLayout>
    <section class="grid grid-cols-1 gap-8 my-20 px-12" v-if="fetchingDog">
      <loader v-for="_item in this.loaders" :key="_item" />
    </section>
    <section class="p-12" v-else>
      <section class="grid gap-x-8 gap-16 information" v-if="activeDog">
        <figure class="overflow-hidden" v-lazyload>
          <img
            class="w-full h-full object-cover origin-center transition-all transform hover:scale-110"
            :data-url="activeDog.imgUrl"
            :alt="activeDog.name"
          />
        </figure>

        <div>
          <h2 class="font-body font-bold text-green-200 text-2xl mb-4">
            {{ this.capitalize(activeDog.name) }}
            <span> ({{ this.capitalize(activeDog.breed) }}) </span>
          </h2>
          <p>{{ activeDog.description }}</p>
        </div>
      </section>
      <p v-else>Can't fetch information about this dog</p>
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import { mapActions, mapState } from "vuex";
import { capitalize } from "vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "ViewDog",
  components: { Loader, BaseLayout },
  data() {
    return {
      dogIndex: this.$route.params.id,
      dogBreed: this.$route.params.breed,
      loaders: Array(1)
        .fill()
        .map((v) => v),
    };
  },
  created() {
    this.fetchSingleDog({
      breed: this.$route.params.breed,
      dogIndex: this.$route.params.id,
    });
  },
  methods: {
    ...mapActions("dogs", ["fetchSingleDog"]),
    capitalize,
  },
  computed: {
    ...mapState("dogs", ["activeDog", "fetchingDog"]),
  },
};
</script>

<style lang="scss" scoped>
.information {
  grid-template-columns: 300px 1fr;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
