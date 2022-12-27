<script setup lang="ts">
import { HelloWorld } from '../widgets';
</script>

<template>
  <div class="app">
    <div class="app__logos">
      <a
        href="https://vitejs.dev"
        target="_blank"
      >
        <img
          src="/vite.svg"
          class="app__img"
          alt="Vite logo"
        >
      </a>
      <a
        href="https://vuejs.org/"
        target="_blank"
      >
        <img
          src="../shared/assets/img/vue.svg"
          class="app__img"
          alt="Vue logo"
        >
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>
<style lang="postcss">
.app {
  @apply p-3 mx-auto w-full h-screen flex flex-col justify-center max-w-[400px];

  &__logos {
    @apply flex flex-col items-center gap-3 p-3;
  }

  &__img {
    @apply w-[100px];
  }
}
</style>
