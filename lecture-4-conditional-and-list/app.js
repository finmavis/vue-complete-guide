const app = Vue.createApp({
  data: function() {
    return {
      goal: '',
      goals: []
    }
  },
  methods: {
    addGoal: function() {
      this.goals.push(this.goal);
      this.goal = '';
    },
    removeGoal: function(index) {
      this.goals.splice(index, 1);
    }
  }
})

app.mount('#user-goals')