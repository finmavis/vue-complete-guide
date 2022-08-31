<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  display: block;
  margin: 0;
  width: 40%;
  top: 20vh;
  left: 30%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
}
</style>
