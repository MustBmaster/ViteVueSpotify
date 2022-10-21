<template>
  <div class="user-widget">
    <ul>
      <li v-for="item in menu" :key="item.id">
        {{ item.title }}
        <IconNewPage v-if="item.openNewpage" />
      </li>
      <div class="dropdown-divider"></div>
      <li>Log out</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserWidgetMenu",
  data() {
    return {
      menu: [
        { id: 1, title: "Account", link: "", openNewpage: true },
        { id: 2, title: "Profile", link: "", openNewpage: false },
        { id: 3, title: "Upgrade to Premium", link: "", openNewpage: true },
        { id: 4, title: "Support", link: "", openNewpage: true },
        { id: 5, title: "Download", link: "", openNewpage: true },
        { id: 6, title: "Settings", link: "", openNewpage: false },
      ],
    };
  },
  components: { IconNewPage },
};
</script>

<style scoped>
.user-widget {
  z-index: 9999;
  position: absolute;
  inset: 0px 0px auto auto;
  margin: 0px;
  transform: translate(-32px, 56px);
  min-width: 196px;
  max-width: 350px;
  padding: 4px;
  background-color: #282828;
  border-radius: 4px;
}

li {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 40px;
  justify-content: space-between;
  padding: 12px;
  position: relative;
  text-align: start;
  user-select: none;
  width: 100%;
  color: white;
}
li:hover {
  background-color: #3e3e3e;
}
hr {
  background-color: #3e3e3e;
}
</style>
