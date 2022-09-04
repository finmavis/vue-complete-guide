<template>
  <the-header title="Learning Resources"></the-header>
  <the-resource></the-resource>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResource from "./components/TheResource.vue";

export default {
  components: { TheHeader, TheResource },
};
</script>

<style>
html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

body {
  margin: 0;
}
</style>
