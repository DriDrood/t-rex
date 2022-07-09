<template>
<button @click="store.plusCounter();">Here: {{ counter }}</button>
</template>

<script lang="ts">
import { useMainStore } from '@/stores/main';
import { computed } from 'vue';

export default {
  name: 'app',
  setup() {
    // pinia
    const store = useMainStore();
    const counter = computed(() => store.counter);
    return {
      counter,
      store,
    };
  }
}

</script>

<style>
.errText {
  font-size: 0.5em;
  color: red;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.button-primary {
  font-size: 1.2em;
  background: var(--button-background-color);
  border-radius: 0;
  border: 5px solid var(--font-color);
  padding: 0.75em 2em;
  margin: 0.5em;
}

.button-primary:active {
  transform: translateY(4px);
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  margin: 3rem 0;
}
</style>
