<!-- PromptComponent.vue -->
<template>
  <div>
    <h2>{{ prompt.category }}</h2>
    <p>{{ prompt.prompt }}</p>
    <!-- Add more styling and interactive elements as needed -->
  </div>
</template>

<script>
export default {
  props: {
    prompt: Object, // The prompt object received as a prop
  },
};
</script>

<style scoped>
/* Add styling for the prompt component */
</style>

