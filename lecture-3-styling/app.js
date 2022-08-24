const app = Vue.createApp({
  data: function() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  computed: {
    boxCClass: function() {
      return {
        active: this.boxCSelected
      }
    }
  },
  methods: {
    boxSelected: function(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected;
      }
    }
  }
})

app.mount('#styling')