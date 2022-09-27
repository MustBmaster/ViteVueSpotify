<template>
  <div class="music-controller">
    <div class="track-controller">
      <IconShuffle />
      <div @click="$emit('prev')"><IconPrev /></div>
      <div @click="$emit('play-pause')" class="btn-playpause">
        <IconPause v-if="play" /><IconPlay v-else />
      </div>
      <div @click="$emit('fwd')"><IconFwd /></div>
      <IconRepeat />
    </div>
    <div class="playback">
      <span class="timer">{{ timeFormat(trackProgress) }}</span>
      <ProgressBar
        @progress-change="handleInputChange"
        :min="0"
        :value="trackProgress"
        :progress="trackProgress"
        :max="trackDuration"
        :step="1"
      />
      <span class="timer">{{ timeFormat(trackDuration) }}</span>
    </div>
  </div>
</template>

<script>
import IconShuffle from "../icons/IconShuffle.vue";
import IconPrev from "../icons/IconPrev.vue";
import IconPause from "../icons/IconPause.vue";
import IconPlay from "../icons/IconPlay.vue";
import IconFwd from "../icons/IconFwd.vue";
import IconRepeat from "../icons/IconRepeat.vue";
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "track-controller",
  props: {
    play: Boolean,
    trackProgress: Number,
    trackDuration: Number,
  },
  components: {
    IconShuffle,
    IconPrev,
    IconPause,
    IconPlay,
    IconFwd,
    IconRepeat,
    ProgressBar,
  },
  methods: {
    handleInputChange: function (value) {
      this.$emit("progress-change", value);
    },
    timeFormat: function (value) {
      let newValue = Math.floor(value);
      let minute = Math.floor(newValue / 60);
      let rest_seconds = newValue % 60;
      return (
        minute.toString().padStart(2, "0") +
        ":" +
        rest_seconds.toString().padStart(2, "0")
      );
    },
  },
};
</script>

<style>
.music-controller {
  width: 40%;
  max-width: 722px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.music-controller > * {
  cursor: pointer;
}
.playback {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items: center;
}
.track-controller {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
  width: 100%;
}
.timer {
  font-size: 0.6875rem;
  font-weight: 400;
  color: #6a6a6a;
  cursor: default;
}
.btn-playpause {
  margin: 0 8px;
}
</style>
