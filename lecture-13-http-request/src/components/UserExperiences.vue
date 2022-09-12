<template>
  <section>
    <h2>Submitted Experiences</h2>
    <button @click="loadSurveys">Load submitted experiences</button>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="!isLoading && error">{{ error }}</p>
    <p v-else-if="!isLoading && surveys.length === 0">
      No stored experiences found.
    </p>
    <ul v-else>
      <li v-for="result in surveys" :key="result.id">
        {{ result.name }} rated the learning experiences {{ result.rating }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["results"],
  data() {
    return {
      surveys: [],
      isLoading: false,
      error: false,
    };
  },
  methods: {
    async loadSurveys() {
      try {
        this.error = null;
        this.isLoading = true;
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/surveys.json`
        );
        const data = await response.json();
        const results = [];
        for (const id in data) {
          results.push({
            id,
            name: data[id].name,
            rating: data[id].rating,
          });
        }
        this.surveys = results;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
        this.error = "Failed to fetch data - Please try again";
      }
    },
  },
  mounted() {
    this.loadSurveys();
  },
};
</script>
