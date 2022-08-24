// Vue.createApp({
//   data: function() {
//     return {
//       goals: []
//     }
//   }
// }).mount('#user-goal');

// Or alternative way

const app = Vue.createApp({
  data: function() {
    return {
      courseGoal: 'Finish the course and learning Vue',
      link: 'https://vuejs.org/',
      courseGoal2: 'Mastering it',
      html: '<h2>Hello World!</h2>'
    }
  },
  methods: {
    outputGoal: function() {
      const random = Math.random();
      if (random < 0.5) {
        return 'Learn Vue!'
      } else {
        return 'Master Vue!'
      }
    },
    outputGoalV2: function() {
      const random = Math.random();
      if (random < 0.5) {
        return this.courseGoal
      } else {
        return this.courseGoal2
      }
    }
  },
})

app.mount('#user-goal');