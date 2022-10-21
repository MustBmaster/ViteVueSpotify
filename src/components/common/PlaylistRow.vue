<template>
  <tr
    class="row-hover align-middle rounded"
    @mouseenter="hover = !hover"
    @mouseleave="hover = !hover"
  >
    <th scope="col" class="col">1</th>
    <th scope="col" class="col-4">
      <div class="title">
        <img
          src="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"
          alt="test"
        />
        <div class="track-info">
          <span>TrackName</span>
          <span>Artist</span>
        </div>
      </div>
    </th>
    <th scope="col" class="col-4">
      <span class="text-justify">Album</span>
    </th>
    <th scope="col" class="col-3">DATE ADDED</th>
    <th scope="col" class="col" style="width: 32px">
      <IconHeart16 v-show="hover" />
    </th>
    <th scope="col" class="col text-center">1:00</th>
    <th scope="col" class="col" style="width: 32px" @click="showAction">
      <Icon3DotSm v-show="hover" />
    </th>
  </tr>
</template>

<script>
import Icon3DotSm from "../icons/Icon3DotSm.vue";
import IconHeart16 from "../icons/IconHeart16.vue";
export default {
  components: { IconHeart16, Icon3DotSm },
  data() {
    return {
      hover: false,
    };
  },
  props: {
    No: Number,
    Title: String,
    Album: String,
    DateAdded: String,
    Duration: String,
  },
};
</script>

<style scoped>
.tr {
  color: var(--text-normal-color);
}
.row-hover:hover {
  background-color: #5a5a5a;
}
.row-hover {
  position: relative;
}
.tool {
  justify-content: center;
  align-items: center;
}
img {
  height: 40px;
  width: 40px;
}
.title {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
.track-info {
  display: flex;
  flex-direction: column;
}
</style>