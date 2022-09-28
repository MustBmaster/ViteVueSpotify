<template>
  <div class="search-form">
    <div class="icon-display">
      <IconSearch />
    </div>
    <input
      type="text"
      placeholder="What do you want to listen to"
      v-model="initValue"
    />
  </div>
</template>

<script>
import IconSearch from "../icons/IconSearch.vue";
export default {
  data() {
    return {
      initValue: "",
    };
  },
  components: { IconSearch },
};
</script>

<style scoped>
.search-form {
  width: 370px;
  height: 40px;
  align-items: center;
  position: relative;
}
input {
  border-radius: 500px;
  height: 40px;
  padding: 6px 48px;
  text-overflow: ellipsis;
  text-justify: auto;
  width: 100%;
  border: none;
  color: black;
}
input:focus {
  outline: none;
}
.icon-display {
  display: flex;
  position: absolute;
  left: 12px;
  align-items: center;
  height: 40px;
  color: black !important;
}
</style>
