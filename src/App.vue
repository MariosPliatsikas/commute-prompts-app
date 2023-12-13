<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <Settings/>
  </div>
</template>

<script>
import Settings from './Settings.vue';

export default {
  components: {
    Settings
  }
};
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

