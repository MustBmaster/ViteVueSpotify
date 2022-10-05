<template>
  <div>
    <div class="playlist-header">
      <div class="header-content p-4 h-100">
        <img
          class="ml-"
          src="https://i.scdn.co/image/ab6761610000e5eb9896fc9a2e28384f2d705c45"
          alt="tét"
        />
        <div class="playlist-detail">
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistPage",
};
</script>

<style scoped>
.playlist-header {
  height: 30vh;
  background-color: rgb(208, 208, 208);
}
img {
  height: 100%;
}
.header-content {
  display: flex;
  flex-direction: row;
  gap: 24px;
}
.playlist-detail {
  /* background: red; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
}
</style>
