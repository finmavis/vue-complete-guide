<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  widows: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

header h1 {
  color: #fff;
  margin: 0;
}
</style>
