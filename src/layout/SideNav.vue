<template>
  <nav class="side-nav">
    <a href="#" class="logo">
      <img
        src="../assets/logo-and-brand-assets/Spotify_Logo_RGB_White.png"
        alt="logo and brand"
      />
    </a>
    <ul>
      <li v-for="nav in links" :key="nav.id" @click="$emit('navigate', nav.id)">
        <NavItem>
          <component :is="nav.icon"></component> {{ nav.name }}
        </NavItem>
      </li>
    </ul>
    <div class="user-related">
      <NavItem><IconAddPlayList />Create Playlist</NavItem>
      <NavItem><IconFavorite />Liked Songs</NavItem>
      <NavItem><hr /></NavItem>
    </div>
    <PlayList />
    <NavItem><IconDownload />Install app</NavItem>
  </nav>
</template>

<script>
import IconHome from "../components/icons/IconHome.vue";
import IconLibrary from "../components/icons/IconLibrary.vue";
import IconSearch from "../components/icons/IconSearch.vue";
import NavItem from "../components/sidenav/NavItem.vue";
import IconAddPlayList from "../components/icons/IconAddPlayList.vue";
import PlayList from "../components/sidenav/PlayList.vue";
import IconFavorite from "../components/icons/IconFavorite.vue";
import IconDownload from "../components/icons/IconDownload.vue";
export default {
  name: "SideNav",
  data() {
    return {
      resize: {
        width: 200,
        height: "100%",
      },
      links: [
        { id: "HomePage", name: "Home", icon: "IconHome" },
        { id: "SearchPage", name: "Search", icon: "IconSearch" },
        { id: "LibraryPage", name: "Library", icon: "IconLibrary" },
      ],
    };
  },
  components: {
    NavItem,
    IconHome,
    IconLibrary,
    IconSearch,
    IconAddPlayList,
    IconFavorite,
    PlayList,
    IconDownload,
  },
};
</script>

<style scoped>
.side-nav {
  padding-top: 24px;
  height: 100%;
  width: 230px;
  min-width: 300px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
}
svg {
  min-width: 32px;
}
ol,
ul {
  list-style: none;
}
.logo {
  margin-bottom: 18px;
  padding: 0 24px;
}
img {
  width: 131px;
}

.user-related {
  margin-top: 24px;
}
</style>
