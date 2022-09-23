<template>
  <div class="side-controller">
    <IconMicro />
    <IconQueue />
    <IconDevices />
    <div class="volume-bar">
      <div @click="$emit('volume-mute')">
        <IconVolumeMute />
      </div>
      <ProgressBar />
    </div>
  </div>
</template>

<script>
import IconMicro from "../icons/IconMicro.vue";
import IconQueue from "../icons/IconQueue.vue";
import IconDevices from "../icons/IconDevices.vue";
import IconVolumeMute from "../icons/IconVolumeMute.vue";
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "SideController",
  props: {
    volume: Number,
  },
  components: {
    IconMicro,
    IconQueue,
    IconDevices,
    IconVolumeMute,
    ProgressBar,
  },
};
</script>

<style scoped>
.side-controller {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-width: 180px;
  width: 30%;
  align-items: center;
}
svg {
  min-width: 32px;
}
.volume-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 125px;
}
</style>
