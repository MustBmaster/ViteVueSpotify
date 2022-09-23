<template>
  <div class="nav-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavItem",
};
</script>

<style>
.nav-item {
  height: 40px;
  min-height: 40px;
  display: flex;
  gap: 16px;
  padding: 0 24px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  color: var(--inactive-color);
}
.nav-item:hover {
  color: var(--hover-color);
}
</style>
