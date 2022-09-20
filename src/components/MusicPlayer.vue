<template>
  <div class="music-player">
    <PlayingTrack :props="track" />
    <MusicController
      :play="isPlaying"
      :trackDuration="audio.duration"
      :trackProgress="trackProgress"
      @play-pause="ppHandler"
      @prev="prevHandler"
      @fwd="fwdHandler"
      @progress-change="progressChange"
    />
    <SideController />
  </div>
</template>

<script>
import MusicController from "./musicplayer/MusicController.vue";
import PlayingTrack from "./musicplayer/PlayingTrack.vue";
import SideController from "./musicplayer/SideController.vue";
// import { ref } from "vue";
import { tracks } from "../track";

export default {
  name: "MusicPlayer",

  components: { MusicController, PlayingTrack, SideController },

  data() {
    return {
      isPlaying: false,
      trackIndex: 0,
      volume: 1,
      trackProgress: 0,
      timer: null,
    };
  },
  methods: {
    ppHandler() {
      this.isPlaying = !this.isPlaying;
    },
    prevHandler() {
      this.isPlaying = true;
      if (this.trackIndex - 1 < 0) {
        this.trackIndex = tracks.length - 1;
      } else {
        this.trackIndex--;
      }
      console.log("prev song");
      console.log(this.track);
    },
    fwdHandler() {
      this.isPlaying = true;
      if (this.trackIndex < tracks.length - 1) {
        this.trackIndex++;
      } else {
        this.trackIndex = 0;
      }
      console.log("next song");
      console.log(this.track);
    },
    startTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.audio.ended) this.fwdHandler();
        else this.trackProgress = this.audio.currentTime;
      }, 1000);
    },
    progressChange(value) {
      this.audio.currentTime = value;
      clearInterval(this.timer);
      this.trackProgress = this.audio.currentTime;
    },
  },

  computed: {
    track: function () {
      return tracks[this.trackIndex];
    },
    audio: function () {
      return new Audio(this.track.audioSrc);
    },
    trackDuration: function () {
      return this.audio.duration;
    },
  },

  watch: {
    isPlaying: function () {
      if (this.isPlaying) {
        this.audio.play();
        this.startTimer();
      } else this.audio.pause();
    },
    audio: function (newaudio, oldaudio) {
      if (this.isPlaying) {
        oldaudio.pause();
        this.startTimer();
        newaudio.play();
      }
    },
  },
};
</script>

<style>
.music-player {
  height: 90px;
  background-color: #181818;
  border-top: 1px solid #282828;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 16px;
  position: fixed;
  bottom: 0;
  z-index: 4;
  width: 100%;
  min-width: 620px;
}
</style>
