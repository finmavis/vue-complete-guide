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
  }
})

app.mount('#ref-example')