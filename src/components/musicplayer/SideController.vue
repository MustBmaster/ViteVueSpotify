<template>
  <div class="side-controller">
    <IconMicro />
    <IconQueue />
    <IconDevices />
    <div class="volume-bar">
      <div @click="$emit('volume-mute')">
        <IconVolumeMute v-if="volume == 0" />
        <IconVolumeLow v-else-if="volume <= 0.3" />
        <IconVolumeMed v-else-if="volume <= 0.6" />
        <IconVolumeHigh v-else />
      </div>
      <ProgressBar
        :step="0.1"
        :value="volume"
        :max="1"
        @progress-change="handleInputChange"
      />
    </div>
  </div>
</template>

<script>
import IconMicro from "../icons/IconMicro.vue";
import IconQueue from "../icons/IconQueue.vue";
import IconDevices from "../icons/IconDevices.vue";
import IconVolumeMute from "../icons/IconVolumeMute.vue";
import ProgressBar from "./ProgressBar.vue";
import IconVolumeLow from "../icons/IconVolumeLow.vue";
import IconVolumeMed from "../icons/IconVolumeMed.vue";
import IconVolumeHigh from "../icons/IconVolumeHigh.vue";
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
    IconVolumeLow,
    IconVolumeMed,
    IconVolumeHigh,
  },
  methods: {
    handleInputChange: function (value) {
      this.$emit("volume-change", value);
    },
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
