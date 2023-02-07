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

          <CustomSelect
            :options="['Go', 'Python', 'Rust', 'Javascript']"
            class="select"
            @input="handleInput($event)"
          />
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols -2 lg:grid-cols-3 gap-8 px-12 my-10 lg:my-20"
      >
        <div
          v-for="(imgURL, index) in dogs"
          :key="index"
          class="flex flex-col items-start"
        >
          <figure
            class="overflow-hidden rounded-2xl cursor-pointer w-full h-96"
          >
            <img
              :src="imgURL"
              :alt="`dogs${index}`"
              class="w-full h-full object-cover origin-center transition-all transform hover:scale-150"
            />
          </figure>

          <div class="w-full flex justify-end mt-4 grid-cols-1">
            <button
              class="btn"
              @click="this.$router.push(`/dog/view/${index}`)"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import CustomSelect from "@/components/Select.vue";

export default {
  name: "Home",
  components: { BaseLayout, CustomSelect },
  data() {
    return {
      dogs: [
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_3286.jpg",
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_3409.jpg",
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_3730.jpg",
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_3841.jpg",
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_3972.jpg",
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_4086.jpg",
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_4130.jpg",
      ],
    };
  },
  methods: {
    handleInput($event) {
      console.log("goood", $event);
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
</style>
