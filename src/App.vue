<template>
  <div class="main">
    <SideNav @navigate="navigate" />
    <div class="content p-0">
      <TopBar>
        <HeaderHome v-if="currentView == 'HomePage'" />
        <HeaderSearch v-else-if="currentView == 'SearchPage'" />
        <HeaderLibrary v-else-if="currentView == 'LibraryPage'" />
      </TopBar>
      <div class="container-fluid p-0">
        <component :is="currentView" class=""></component>
      </div>
    </div>
    <MusicPlayer />
  </div>
</template>

<script>
import MusicPlayer from "./components/MusicPlayer.vue";
import SideNav from "./components/SideNav.vue";
import TopBar from "./components/TopBar.vue";
import HomePage from "./pages/HomePage.vue";
import HeaderHome from "./components/topbar/HeaderHome.vue";
import HeaderSearch from "./components/topbar/HeaderSearch.vue";
import SearchPage from "./pages/SearchPage.vue";
import HeaderLibrary from "./components/topbar/HeaderLibrary.vue";
import LibraryPage from "./pages/LibraryPage.vue";
import PlaylistPage from "./pages/PlaylistPage.vue";

export default {
  name: "App",
  data() {
    return {
      currentView: "PlaylistPage",
    };
  },
  components: {
    MusicPlayer,
    SideNav,
    TopBar,
    HomePage,
    HeaderHome,
    HeaderSearch,
    SearchPage,
    HeaderLibrary,
    LibraryPage,
    PlaylistPage,
  },
  methods: {
    navigate(value) {
      this.currentView = value;
    },
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
  text-overflow: ellipsis;
}
:root {
  --inactive-color: #bababa;
  --hover-color: white;
  --theme-active-color: #1ed760;
  --page-theme: #121212;
  --text-nomal-color: #b3b3b3;
}
ol,
ul {
  list-style: none !important;
  margin: 0 0 !important;
  padding: 0 0 !important;
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
  max-width: 100%;
}
.content {
  flex-grow: 1;
  background-color: var(--page-theme);
  overflow-y: scroll;
  margin-bottom: 90px;
  position: relative;
}
hr {
  height: 1px;
  background-color: #282828;
  min-height: 1px;
  width: 100%;
  border: none;
  margin: 0 0;
}
h2,
h3,
h4,
h5,
h6 {
  color: var(--hover-color);
  margin: 0 0 !important;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  height: 10%;
  background: #5a5a5a;
}

::-webkit-scrollbar-thumb:hover {
  background: hsla(0, 0%, 100%, 0.7);
}
</style>
