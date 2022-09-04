<template>
  <ul v-for="resource in resources" :key="resource.id">
    <resource-item
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></resource-item>
  </ul>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";
export default {
  components: { ResourceItem },
  inject: ["resources"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 40rem;
}
</style>
