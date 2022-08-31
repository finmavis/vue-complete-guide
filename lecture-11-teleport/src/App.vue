<script>
import ModalAlert from "./components/ModalAlert.vue";

export default {
  components: { ModalAlert },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.isVisible = true;
    },
    closeDialog() {
      this.isVisible = false;
    },
  },
};
</script>

<template>
  <section>
    <button @click="openDialog">Open Dialog</button>
    <teleport to="body">
      <modal-alert v-if="isVisible">
        <h2>Dialog Title</h2>
        <p>Dialog Description</p>
        <button @click="closeDialog">Confirm</button>
      </modal-alert>
    </teleport>
  </section>
</template>
