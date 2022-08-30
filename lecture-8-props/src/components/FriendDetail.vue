<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    emailAddress: {
      type: String,
      required: false,
      default: "",
      validator: function (value) {
        return value.endsWith(".com");
      },
    },
    isFavourite: Boolean,
  },
  // emits: ["toggle-favourite"],
  emits: {
    "toggle-favourite": function (id) {
      if (id) {
        return true;
      }
      console.warn(`"toggle-favourite" ID is missing`);
      return false;
    },
    "delete-friend": function (id) {
      if (id) {
        return true;
      }
      console.warn(`"delete-friend" ID is missing`);
      return false;
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleDetail: function () {
      this.isVisible = !this.isVisible;
    },
    toggleFavourite: function () {
      // Should be kebab case
      this.$emit("toggle-favourite", this.id);
    },
    deleteFriend: function () {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>

<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleDetail">
      {{ isVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<style scoped></style>
