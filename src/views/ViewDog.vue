<template>
  <BaseLayout>
    <error-alert :error="dogError" />
    <section class="grid grid-cols-1 gap-8 my-20 px-12" v-if="fetchingDog">
      <loader v-for="_item in this.loaders" :key="_item" />
    </section>
    <section class="p-12" v-else>
      <section class="grid gap-x-8 gap-16 information" v-if="activeDog">
        <div>
          <figure class="overflow-hidden w-full h-auto" v-lazyload>
            <img
              class="w-full h-full object-cover origin-center transition-all transform hover:scale-110"
              :data-url="activeDog.imgUrl"
              :alt="activeDog.name"
            />
          </figure>
        </div>

        <section>
          <section class="flex flex-col">
            <h2 class="font-body font-bold text-green-200 text-2xl mb-4">
              {{ this.capitalize(activeDog.name) }}
              <span> ({{ this.capitalize(activeDog.breed) }}) </span>
            </h2>
            <p class="text-neutral-700 text-md font-body">
              {{ activeDog.description }}
            </p>

            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8"
            >
              <div class="info__card">
                <h6>Trainability</h6>
                <p>{{ activeDog.trainability ? "Yes" : "No" }}</p>
              </div>
              <div class="info__card">
                <h6>Protectiveness</h6>
                <p>{{ activeDog.protectiveness ? "Yes" : "No" }}</p>
              </div>
              <div class="info__card">
                <h6>Energy</h6>
                <p>{{ activeDog.energy }}%</p>
              </div>
              <div class="info__card">
                <h6>Average Weight</h6>
                <p>{{ activeDog.weight }}&nbsp;(Kg)</p>
              </div>
              <div class="info__card">
                <h6>Maximum Life Expectancy</h6>
                <p>
                  {{ activeDog.max_life_expectancy }}&nbsp;(Year{{
                    Number(activeDog.max_life_expectancy) > 1 ? "s" : ""
                  }})
                </p>
              </div>
            </div>
          </section>
        </section>
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
import ErrorAlert from "@/components/ErrorAlert.vue";

export default {
  name: "ViewDog",
  components: { Loader, BaseLayout, ErrorAlert },
  data() {
    return {
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
    ...mapState("dogs", ["activeDog", "fetchingDog", "dogError"]),
  },
};
</script>

<style lang="scss" scoped>
.information {
  grid-template-columns: 350px 1fr;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.info__card {
  @apply flex flex-col p-4 bg-grey-100 rounded-md;

  h6 {
    @apply font-body font-bold text-green-200 text-lg;
  }

  p {
    @apply font-body font-normal text-sm text-neutral-700;
  }
}
</style>
