<template>
  <div
    class="track-normal rounded h-100"
    @mouseenter="hover = !hover"
    @mouseleave="hover = !hover"
  >
    <div class="track-img img-fluid">
      <img
        src="https://i.scdn.co/image/ab6761610000e5eb9896fc9a2e28384f2d705c45"
        alt="test"
        class="rounded"
      />
      <div class="btn-pp" v-show="hover">
        <IconPlayGreen />
      </div>
    </div>
    <h6 class="pb-1">Track Name</h6>
    <Span class="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque ipsam
      corrupti facere quibusdam consectetur cupiditate ratione a ipsa, vel
      nesciunt saepe, officiis aliquam et iusto ullam veritatis rerum nulla!
    </Span>
  </div>
</template>

<script>
import IconPlayGreen from "../icons/IconPlayGreen.vue";
export default {
  name: "TrackNormal",
  data() {
    return {
      hover: false,
    };
  },
  components: { IconPlayGreen },
};
</script>

<style scoped>
.track-normal {
  padding: 16px;
  background: #181818;
}
.track-normal:hover {
  background: #282828;
}

.btn-pp {
  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 2;
}
.track-img {
  position: relative;
  margin-bottom: 16px;
}
</style>
