<script>
import FriendDetail from "./components/FriendDetail.vue";
import AddFriend from "./components/AddFriend.vue";
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel",
          phone: "1234 567 8910",
          email: "manuel@localhost.com",
          isFavourite: true,
        },
        {
          id: "julie",
          name: "Julie",
          phone: "1234 567 8910",
          email: "julie@localhost.com",
          isFavourite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavourite: function (id) {
      const friend = this.friends.find((friend) => friend.id === id);
      friend.isFavourite = !friend.isFavourite;
    },
    addFriend: function (person) {
      this.friends.push({
        ...person,
        id: new Date().toISOString(),
        isFavourite: false,
      });
    },
    deleteFriend: function (id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
  components: { FriendDetail, AddFriend },
};
</script>

<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <AddFriend @add-friend="addFriend" />
    <ul>
      <FriendDetail
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavourite"
        @delete-friend="deleteFriend"
      />
    </ul>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
