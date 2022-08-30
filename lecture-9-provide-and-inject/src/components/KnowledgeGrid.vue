<template>
  <ul>
    <!-- Without Provide -->
    <!-- <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></KnowledgeElement> -->
    <!-- With Provide -->
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></KnowledgeElement>
  </ul>
</template>

<script>
import KnowledgeElement from "./KnowledgeElement.vue";

export default {
  inject: ["topics"],
  // emits: ["select-topic"],
  components: {
    KnowledgeElement,
  },
};
</script>
