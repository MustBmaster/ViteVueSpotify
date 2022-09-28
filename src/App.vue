<template>
  <div class="main">
    <SideNav @navigate="navigate" />
    <div class="content">
      <TopBar>
        <!-- <HeaderHome /> -->
        <HeaderSearch />
      </TopBar>
      <div>
        <component :is="currentView"></component>
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
import TestPage from "./pages/TestPage.vue";
import HeaderHome from "./components/topbar/HeaderHome.vue";
import HeaderSearch from "./components/topbar/HeaderSearch.vue";

export default {
  name: "App",
  data() {
    return {
      currentView: "HomePage",
    };
  },
  components: {
    MusicPlayer,
    SideNav,
    TopBar,
    HomePage,
    TestPage,
    HeaderHome,
    HeaderSearch,
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
/* svg {
  color: var(--inactive-color);
}
svg:hover {
  color: var(--hover-color);
} */
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
img {
  width: 100%;
  height: 100%;
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
