<template>
  <div class="app">
    <Count></Count>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
  mounted() {
    console.log("@APP", this);
  },
};
</script>

<style scoped>
</style>
