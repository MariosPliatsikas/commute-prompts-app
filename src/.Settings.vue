<!-- Settings.vue -->

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
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
/* eslint-enable vue/multi-word-component-names */
</script>
<style>
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
