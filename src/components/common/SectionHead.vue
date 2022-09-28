<template>
  <div class="row gx-4 gy-3 recent-tracks container-fluid m-0 p-0">
    <h2>Good Morning</h2>
    <div class="col-lg-4 col-md-6">
      <TrackRecent />
    </div>
    <div class="col-lg-4 col-md-6">
      <TrackRecent />
    </div>
    <div class="col-lg-4 col-md-6">
      <TrackRecent />
    </div>
    <div class="col-lg-4 col-md-6">
      <TrackRecent />
    </div>
    <div class="col-lg-4 col-md-6">
      <TrackRecent />
    </div>
    <div class="col-lg-4 col-md-6">
      <TrackRecent />
    </div>
  </div>
</template>

<script>
import TrackRecent from "./TrackRecent.vue";
export default {
  name: "HeadSection",
  components: { TrackRecent },
};
</script>

<style>
</style>
