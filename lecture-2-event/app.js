const app = Vue.createApp({
  data: function() {
    return {
      count: 0,
      name: '',
      fullNameWatch: ''
    }
  },
  // Will be triggered evertime the property name changed
  // In this case name in the data object
  // Not will be used in the template
  watch: {
    name: function(newValue, oldValue) {
      this.fullNameWatch = newValue + ' ' + 'Last name'
    }
  },
  // Vue will check the dependency and will not render again
  // Used for data binding
  computed: {
    fullname: function() {
      if (this.name === '') {
        return this.name;
      }
      return this.name + ' ' + 'Last Name'
    }
  },
  // Will be executed everytime rendered if used in the template
  // Used for the events binding
  methods: {
    add: function() {
      this.count++;
    },
    reduce: function() {
      this.count--;
    },
    addBy: function(num = 1) {
      this.count += num;
    },
    reduceBy: function(num = 1) {
      this.count -= num;
    },
    setName: function(event) {
      this.name = event.target.value;
    },
    setNameWithLastName: function(event, lastName) {
      this.name = `${event.target.value} ${lastName}`
    },
    submitForm: function(event) {
      event.preventDefault();
      alert("Submitted")
    },
    submitFormWithModifiers: function() {
      alert("Submitted")
    },
    resetForm: function() {
      this.name = ''
    }
  },
})

app.mount('#user-goal');