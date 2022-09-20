<template>
  <div>
    <SideNav />
    <MusicPlayer />
  </div>
</template>

<script>
import MusicPlayer from "./components/MusicPlayer.vue";
import SideNav from "./components/SideNav.vue";

export default {
  name: "App",
  components: {
    MusicPlayer,
    SideNav,
  },
};
</script>

<style>
* {
  padding: 0 0;
  margin: 0 0;
  box-sizing: border-box;
  font-family: sans-serif;
  font-family: "Open Sans", sans-serif;
}
:root {
  --inactive-color: #bababa;
  --hover-color: white;
  --theme-active-color: #1ed760;
}
svg {
  min-width: 32px;
  color: var(--inactive-color);
}
svg:hover {
  color: var(--hover-color);
}
#app {
  background-color: black;
}
</style>
