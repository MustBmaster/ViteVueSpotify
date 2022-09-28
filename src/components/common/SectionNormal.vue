<template>
  <div class="row container-fluid mt-4 section m-0 p-0">
    <div class="section-header mb-3">
      <h4>Section Name</h4>
      <h6>SEE ALL</h6>
    </div>
    <div class="col-2 h-100">
      <TrackNormal />
    </div>
    <div class="col-2 h-100">
      <TrackNormal />
    </div>
    <div class="col-2 h-100">
      <TrackNormal />
    </div>
    <div class="col-2 h-100">
      <TrackNormal />
    </div>
    <div class="col-2 h-100">
      <TrackNormal />
    </div>
    <div class="col-2 h-100">
      <TrackNormal />
    </div>
  </div>
</template>

<script>
import TrackNormal from "./TrackNormal.vue";
export default {
  name: "NormalSection",
  components: { TrackNormal },
};
</script>

<style>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
