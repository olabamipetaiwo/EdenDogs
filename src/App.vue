<template>
  <section class="w-full min-h-screen bg-primary-bg">
    <section class="container">
      <router-view />
    </section>
  </section>
</template>

<style lang="css" scoped>
.container {
  @apply mx-auto w-full max-w-container px-10 container:px-0;
}
</style>
