<template>
  <div class="playing-track">
    <img :src="props.imageSrc" alt="test" />
    <div class="song-info">
      <div class="song-name">{{ props.title }}</div>
      <div class="artist">{{ props.artist }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayingTrack",
  props: ["props"],
};
</script>

<style scoped>
.playing-track {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: var(--inactive-color);
}
.playing-track > * {
  cursor: pointer;
}
.playing-track > * :hover {
  color: var(--select-hover-color);
}
img {
  width: 56px;
  height: 56px;
}
.song-info {
  margin: 0 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--select-hover-color);
}
.song-info > *:hover {
  text-decoration: underline;
}
.song-name {
  font-size: 0.875rem;
  font-weight: 400;
}
.artist {
  font-size: 0.6875rem;
  font-weight: 400;
}
</style>
