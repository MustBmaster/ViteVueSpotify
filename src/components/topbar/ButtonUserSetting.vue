<template>
  <div>
    <button class="user-setting" @click="active = !active">
      <img src="../../assets/img/images.jpeg" alt="user img" />
      <span>Minh Nguyễn Vũ</span>
      <IconBtnToggle1 v-if="active" /><IconBtnToggle2 v-else />
    </button>
    <UserWidgetMenu v-show="active" />
  </div>
</template>

<script>
import IconBtnToggle2 from "../icons/IconBtnToggle2.vue";
import IconBtnToggle1 from "../icons/IconBtnToggle1.vue";
import UserWidgetMenu from "./UserWidgetMenu.vue";
export default {
  name: "ButtonUserSetting",
  data() {
    return {
      active: false,
    };
  },
  components: { IconBtnToggle2, IconBtnToggle1, UserWidgetMenu },
};
</script>

<style scoped>
.user-setting {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border: 0;
  border-radius: 23px;
  color: #fff;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 32px;
  justify-content: center;
  padding: 2px;
}
.user-setting:hover {
  background-color: #282828;
}
img {
  height: 28px;
  width: 28px;
  border-radius: 50%;
}
</style>
