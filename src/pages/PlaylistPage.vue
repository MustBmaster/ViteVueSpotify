<template>
  <div class="playlist">
    <div class="playlist-header">
      <div class="header-content p-4 h-100">
        <img
          class="ml-"
          src="https://i.scdn.co/image/ab6761610000e5eb9896fc9a2e28384f2d705c45"
          alt="tét"
        />
        <div class="playlist-detail">
          <span>Playlist</span>
          <h1>Playlist name</h1>
          <span class="playlist-description">Playlist description</span>
          <span>Playlist infomation</span>
          <IconTest />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTest from "@/components/icons/IconTest.vue";
export default {
  name: "PlaylistPage",
  components: { IconTest },
};
</script>

<style scoped>
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
</style>
