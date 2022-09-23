<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonNav",
};
</script>

<style scoped>
button {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  justify-content: center;
  width: 32px;
}
</style>
