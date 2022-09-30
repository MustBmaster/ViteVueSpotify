<template>
  <div class="row gx-4 gy-4 container-fluid section m-0 p-0 mb-4">
    <div class="section-header m-0">
      <h4>Section Name</h4>
      <h6>SEE ALL</h6>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NormalSection",
};
</script>

<style>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
