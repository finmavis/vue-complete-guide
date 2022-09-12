<template>
  <form @submit.prevent="handleSubmit">
    <h2>How was your learning experience?</h2>
    <div class="form-control">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model.trim="userName" />
    </div>
    <h3>My learning experience was ...</h3>
    <div class="form-control">
      <input
        type="radio"
        name="rating"
        id="poor"
        value="poor"
        v-model="rating"
      />
      <label for="poor">Poor</label>
    </div>
    <div class="form-control">
      <input
        type="radio"
        name="rating"
        id="average"
        value="average"
        v-model="rating"
      />
      <label for="average">Average</label>
    </div>
    <div class="form-control">
      <input
        type="radio"
        name="rating"
        id="great"
        value="great"
        v-model="rating"
      />
      <label for="great">Great</label>
    </div>
    <p v-if="invalidInput">
      One or more input are invalid. Please check your provided data.
    </p>
    <p v-if="error">{{ error }}</p>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["save-survey"],
  data: function () {
    return {
      userName: "",
      rating: "",
      invalidInput: false,
      error: null,
    };
  },
  methods: {
    handleSubmit() {
      if (this.userName === "" || this.rating === "") {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      // this.$emit("save-survey", {
      //   userName: this.userName,
      //   rating: this.rating,
      // });
      this.error = null;
      fetch(`${import.meta.env.VITE_API_URL}/surveys.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.userName,
          rating: this.rating,
        }),
      })
        .then((response) => {
          if (response.ok) {
            this.resetForm();
          } else {
            throw new Error("Could not save the data!");
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = "Something went wrong - Please try again";
        });
    },
    resetForm() {
      this.userName = "";
      this.rating = "";
    },
  },
};
</script>
