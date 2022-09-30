<template>
  <div class="d-flex">
    <div class="items mx-1 p-2 rounded">Playlists</div>
    <div class="items mx-1 p-2 rounded">Podcast</div>
    <div class="items mx-1 p-2 rounded">Artist</div>
    <div class="items mx-1 p-2 rounded">Albums</div>
  </div>
</template>

<script>
export default {
  name: "HeaderLibrary",
};
</script>

<style scoped>
.items {
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #333;
}
</style>
