<template>
  <div class="row gx-4 gy-3 recent-tracks container-fluid m-0 p-0 mb-4">
    <h2>Good Morning</h2>
    <TrackRecent />
    <TrackRecent />
    <TrackRecent />
    <TrackRecent />
    <TrackRecent />
    <TrackRecent />
  </div>
</template>

<script>
import TrackRecent from "./TrackRecent.vue";
export default {
  name: "HeadSection",
  components: { TrackRecent },
};
</script>

<style></style>
