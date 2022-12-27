<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="font-black text-lg mb-4">
    {{ msg }}
  </h1>

  <div class="helloworld__card mb-4">
    <button
      type="button"
      class="helloworld__button mb-4"
      @click="count++"
    >
      count is {{ count }}
    </button>
    <p>
      Edit <code class="font-mono">components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
    >
      create-vue
    </a>, the official Vue + Vite starter
  </p>
  <p class="mb-4">
    Install
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
    in your IDE for a better DX
  </p>
  <p class="helloworld__md">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<style lang="postcss">
.helloworld {
  &__card {
    @apply p-4 border border-gray rounded-lg;
  }

  &__button {
    @apply px-4 py-2 rounded-lg border bg-primary text-white hover:bg-opacity-80 transition-all duration-200;
  }

  &__md {
    @apply text-gray2;
  }
}
</style>
