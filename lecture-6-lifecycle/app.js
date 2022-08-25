const app = Vue.createApp({
  data: function() {
    return {
      message: '',
      currentUserInput: ''
    }
  },
  methods: {
    setText: function() {
      this.message = this.$refs.userText.value;
    }
  },
  beforeCreate: function() {
    console.log("Before Create")
  },
  created: function() {
    console.log("Created")
  },
  beforeMount: function() {
    console.log("beforeMount")
  },
  mounted: function() {
    console.log("mounted")
  },
  beforeUpdate: function() {
    console.log("beforeUpdate")
  },
  updated: function() {
    console.log("updated")
  },
  beforeUnmount: function() {
    console.log("beforeUnmount")
  },
  unmounted: function() {
    console.log("unmounted")
  },
})

app.mount('#lifecycle');

// createApp -> beforeCreate -> created (compile template) -> beforeMount (compile template) -> mounted
// Data change -> beforeUpdate -> updated
// Unmount -> beforeUnmount -> unmounted