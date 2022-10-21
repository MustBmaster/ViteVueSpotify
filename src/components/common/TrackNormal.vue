<template>
  <div
    class="col-2"
    @mouseenter="hover = !hover"
    @mouseleave="hover = !hover"
    v-show="display"
  >
    <div class="p-3 track-normal rounded">
      <div class="icon-x" @click="display = !display">
        <IconX />
      </div>
      <div class="track-img img-fluid">
        <img
          src="https://i.scdn.co/image/ab6761610000e5eb9896fc9a2e28384f2d705c45"
          alt="test"
          class="rounded"
          draggable="false"
        />
        <div class="btn-pp" v-show="hover">
          <IconPlayGreen />
        </div>
      </div>
      <h6 class="pb-1">Track Name</h6>
      <span class="text-elipsis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eaque
        ipsam corrupti facere quibusdam consectetur cupiditate ratione a ipsa,
        vel nesciunt saepe, officiis aliquam et iusto ullam veritatis rerum
        nulla!
      </span>
    </div>
  </div>
</template>

<script>
import IconPlayGreen from "../icons/IconPlayGreen.vue";
import IconX from "../icons/IconX.vue";
export default {
  name: "TrackNormal",
  data() {
    return {
      display: true,
      hover: false,
    };
  },
  components: { IconPlayGreen, IconX },
};
</script>

<style scoped>
.track-normal {
  background: #181818;
  color: var(--text-normal-color);
  position: relative;
  width: 100%;
}
.text-elipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: justify;
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
.icon-x {
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 2;
  border-radius: 50%;
}
img {
  width: 100%;
  aspect-ratio: 1/1;
}
</style>
