<template>
  <div class="col-2">
    <div class="rounded item-genre position-relative">
      <div class="p-3">Genre name</div>
      <div class="genre-img">
        <img
          src="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"
          alt="test"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.item-genre {
  width: 100%;
  aspect-ratio: 1/1;
  background: greenyellow;
  cursor: pointer;
  overflow: hidden;
}
.genre-img {
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
  height: 100px;
  width: 100px;
  transform: rotate(25deg) translate(18%, -2%);
}
</style>
