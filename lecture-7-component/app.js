const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '1234 567 8910',
          email: 'manuel@localhost.co'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '1234 567 8910',
          email: 'manuel@localhost.co'
        }
      ]
    }
  }
});

app.component('user-detail', {
  template: `
    <li v-for="friend in friends" :key="friend.id">
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetail">{{ isVisible ? 'Hide' : 'Show'}} Details</button>
      <ul v-if="isVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    toggleDetail: function() {
      this.isVisible = !this.isVisible
    }
  }
})

app.mount('#component');
