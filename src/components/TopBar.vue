<template>
  <div class="top-bar">
    <div class="nav-btn">
      <NavButton><IconPrevPage /></NavButton>
      <NavButton><IconNextPage /></NavButton>
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
    <ButtonUserSetting />
  </div>
</template>

<script>
import NavButton from "./topbar/ButtonNav.vue";
import IconNextPage from "./icons/IconNextPage.vue";
import IconPrevPage from "./icons/IconPrevPage.vue";
import ButtonUserSetting from "./topbar/ButtonUserSetting.vue";
export default {
  name: "TopBar",
  props: {
    currentPage: String,
  },
  components: { NavButton, IconNextPage, IconPrevPage, ButtonUserSetting },
};
</script>

<style>
.top-bar {
  padding: 16px 32px;
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: var(--page-theme);
  z-index: 10;
  position: sticky;
  top: 0;
}
.nav-btn {
  display: flex;
  gap: 16px;
  align-items: center;
  height: 40px;
}
.content-wrapper {
  flex-grow: 1;
}
</style>
