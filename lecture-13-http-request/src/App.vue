<script>
import LearningSurvey from "./components/LearningSurvey.vue";
import UserExperiences from "./components/UserExperiences.vue";

export default {
  components: { LearningSurvey, UserExperiences },
  data() {
    return {
      surveyResults: [],
    };
  },
  methods: {
    saveSurvey(data) {
      const result = {
        id: new Date().toISOString(),
        name: data.userName,
        rating: data.rating,
      };
      this.surveyResults.push(result);
    },
  },
};
</script>

<template>
  <main>
    <learning-survey @save-survey="saveSurvey"></learning-survey>
    <user-experiences :results="surveyResults"></user-experiences>
  </main>
</template>
