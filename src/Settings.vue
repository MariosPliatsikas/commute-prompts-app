<!-- Settings.vue -->

<template>
  <div>
    <h2>Settings</h2>
    <p>Choose your route preferences:</p>

    <!-- Add your preference options here -->
    <label>
      <input type="checkbox" v-model="preferenceOption1" />
      Preference Option 1
    </label>

    <label>
      <input type="checkbox" v-model="preferenceOption2" />
      Preference Option 2
    </label>

    <!-- Add more preference options as needed -->

    <button @click="savePreferences">Save Preferences</button>
  </div>
</template>
<!-- Settings.vue -->
<script>
export default {
  name: 'SettingPage', // Add this line with a multi-word name
  data() {
    return {
      preferenceOption1: false,
      preferenceOption2: false,
      // Add more data properties for additional preferences
    };
  },
  methods: {
    savePreferences() {
      // Implement logic to save preferences to the backend or local storage
      console.log('Preferences saved:', this.preferenceOption1, this.preferenceOption2);
    },
  },
};
</script>
<style scoped>
/* Add your component-specific styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 150px;
  height: 150px;
}
</style>

