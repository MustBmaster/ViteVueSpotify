<template>
  <div class="playlist">
    <ul>
      <li v-for="playlist in playlists" :key="playlist.id">
        {{ playlist.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlayList",
  data() {
    return {
      playlists: [
        { id: 1, name: "Đen Vâu" },
        { id: 2, name: "Us UK" },
        { id: 3, name: "Madihu" },
      ],
    };
  },
};
</script>

<style scoped>
.playlist {
  padding: 8px 0;
  height: 100%;
  width: 100%;
}

li {
  height: 32px;
  padding: 0 24px;
  justify-content: flex-start;
  color: var(--inactive-color);
}
li:hover {
  color: var(--hover-color);
}
</style>
