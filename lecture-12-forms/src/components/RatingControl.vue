<!-- Example of custom control -->
<template>
  <ul>
    <li>
      <button
        type="button"
        @click="activate('poor')"
        :class="{ active: activeOption === 'poor' }"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        type="button"
        @click="activate('average')"
        :class="{ active: activeOption === 'average' }"
      >
        Average
      </button>
    </li>
    <li>
      <button
        type="button"
        @click="activate('great')"
        :class="{ active: activeOption === 'great' }"
      >
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  // Vue will passed this props and emits when we use v-model in custom component
  props: ["modelValue"],
  emits: ["update:modelValue"],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      // this.activeOption = option;
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}
</style>
