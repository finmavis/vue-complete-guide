<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div>
      <label>Phone Number</label>
      <input type="tel" name="phone" v-model="phone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" name="email" v-model="email" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  emits: {
    "add-friend": function ({ name, phone, email }) {
      if (name || phone || email) {
        return true;
      }
      console.warn(`"add-friend"`);
      return false;
    },
  },
  methods: {
    submitData: function () {
      this.$emit("add-friend", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>
