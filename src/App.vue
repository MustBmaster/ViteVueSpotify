<template>
  <div class="main">
    <SideNav />
    <div class="content">
      <TopBar />
      <HomePage />
    </div>
    <MusicPlayer />
  </div>
</template>

<script>
import MusicPlayer from "./components/MusicPlayer.vue";
import SideNav from "./components/SideNav.vue";
import TopBar from "./components/TopBar.vue";
import HomePage from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    MusicPlayer,
    SideNav,
    TopBar,
    HomePage,
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
  --page-theme: #121212;
}
ol,
ul {
  list-style: none !important;
  margin: 0 0 !important;
  padding: 0 0 !important;
}
svg {
  color: var(--inactive-color);
}
svg:hover {
  color: var(--hover-color);
}
#app {
  background-color: black;
}
.main {
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 100%;
  position: fixed;
  min-width: 100%;
}
.content {
  flex-grow: 1;
  background-color: var(--page-theme);
  overflow-y: scroll;
  margin-bottom: 90px;
}
hr {
  height: 1px;
  background-color: #282828;
  min-height: 1px;
  width: 100%;
  border: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  height: 10%;
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
