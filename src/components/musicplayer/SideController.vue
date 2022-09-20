<template>
  <div class="side-controller">
    <IconMicro />
    <IconQueue />
    <IconDevices />
    <div class="volume-bar">
      <IconVolumeMute />
      <ProgressBar />
    </div>
  </div>
</template>

<script>
import IconMicro from "../icons/IconMicro.vue";
import IconQueue from "../icons/IconQueue.vue";
import IconDevices from "../icons/IconDevices.vue";
import IconVolumeMute from "../icons/IconVolumeMute.vue";
import ProgressBar from "../common/ProgressBar.vue";
export default {
  name: "SideController",
  components: {
    IconMicro,
    IconQueue,
    IconDevices,
    IconVolumeMute,
    ProgressBar,
  },
};
</script>

<style>
.side-controller {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-width: 180px;
  width: 30%;
  align-items: center;
}
.volume-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 125px;
}
</style>
