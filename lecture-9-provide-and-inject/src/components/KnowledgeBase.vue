<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- Without Provide -->
    <!-- <knowledge-grid
      :topics="topics"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-grid> -->
    <!-- With Provide -->
    <KnowledgeGrid></KnowledgeGrid>
  </section>
</template>

<script>
import KnowledgeGrid from "./KnowledgeGrid.vue";

export default {
  // props: ["topics"],
  // emits: ["select-topic"],
  components: { KnowledgeGrid },
};
</script>
