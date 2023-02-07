<template>
  <BaseLayout>
    <section class="grid gap-x-8 gap-16 p-12 information">
      <figure class="overflow-hidden">
        <img
          class="w-full h-full object-cover origin-center transition-all transform hover:scale-110"
          :src="imgURL"
          alt="dog"
        />
      </figure>

      <div>
        <h2 class="font-body font-bold text-green-200 text-2xl mb-4">
          German Shepard
        </h2>
        <p>
          Generally considered dogkind's finest all-purpose worker, the German
          Shepherd Dog is a large, agile, muscular dog of noble character and
          high intelligence. Loyal, confident, courageous, and steady, the
          German Shepherd is truly a dog lover's delight. German Shepherd Dogs
          can stand as high as 26 inches at the shoulder and, when viewed in
          outline, presents a picture of smooth, graceful curves rather than
          angles. The natural gait is a free-and-easy trot, but they can turn it
          up a notch or two and reach great speeds. There are many reasons why
          German Shepherds stand in the front rank of canine royalty, but
          experts say their defining attribute is character: loyalty, courage,
          confidence, the ability to learn commands for many tasks, and the
          willingness to put their life on the line in defense of loved ones.
          German Shepherds will be gentle family pets and steadfast guardians,
          but, the breed standard says, there's a 'certain aloofness that does
          not lend itself to immediate and indiscriminate friendships.'
        </p>
      </div>
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";

export default {
  name: "ViewDog",
  components: { BaseLayout },
  data() {
    return {
      imgURL: "https://images.dog.ceo/breeds/affenpinscher/n02110627_4130.jpg",
    };
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
