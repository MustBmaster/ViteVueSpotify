<template>
  <div class="playlist">
    <div class="playlist-header">
      <div class="header-content p-4 h-100">
        <img
          class="ml-"
          src="https://i.scdn.co/image/ab6761610000e5eb9896fc9a2e28384f2d705c45"
          alt="t"
        />
        <div class="playlist-detail">
          <span>Playlist</span>
          <h1>Playlist name</h1>
          <span class="playlist-description">Playlist description</span>
          <span>Playlist infomation</span>
        </div>
      </div>
    </div>
    <div class="p-4 playlist-function">
      <IconPlayGreen />
      <IconHeart32 />
      <Icon3Dot />
    </div>
    <div class="px-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="col">#</th>
            <th scope="col" class="col-4">TITLE</th>
            <th scope="col" class="col-4">ALBUM</th>
            <th scope="col" class="col-3">DATE ADDED</th>
            <th scope="col" class="col"><IconClock /></th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import IconPlayGreen from "@/components/icons/IconPlayGreen.vue";
import IconHeart32 from "@/components/icons/IconHeart32.vue";
import Icon3Dot from "@/components/icons/Icon3Dot.vue";
import IconClock from "@/components/icons/IconClock.vue";

export default {
  name: "PlaylistPage",
  components: { IconPlayGreen, IconHeart32, Icon3Dot, IconClock },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  position: absolute;
  top: 0;
  width: 100%;
}

.playlist-header {
  height: 30vh;
  max-height: 500px;
  min-height: 340px;
  background-color: rgb(208, 208, 208);
}

img {
  height: 240px;
}

.header-content {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: flex-end;
}

.playlist-detail {
  /* background: red; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  color: white;
}

.playlist-description {
  color: var(--inactive-color);
}

.playlist-function {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  color: var(--inactive-color);
}
.playlist-function > *:hover {
  color: var(--hover-color);
}
.table {
  color: white;
}
thead {
  position: sticky;
}
</style>

