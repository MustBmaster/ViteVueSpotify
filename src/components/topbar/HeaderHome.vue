<template>
  <div class="home-header">
    <div class="btn-upgrade">Upgrade</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.btn-upgrade {
  box-sizing: border-box;
  border-radius: 500px;
  text-align: center;
  vertical-align: middle;
  padding-block: 3px;
  padding-inline: 15px;
  border: 1px solid #878787;
  min-block-size: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
.btn-upgrade:hover {
  background: black;
  border: 1px solid white;
  color: white;
}
</style>
