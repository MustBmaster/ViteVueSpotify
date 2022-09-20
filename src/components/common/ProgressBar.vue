<template>
  <input type="range" min="0" id="range" @change="handleInputChange" />
</template>

<script>
export default {
  name: "ProgressBar",
  methods: {
    handleInputChange: function (e) {
      let target = e.target;
      const min = target.min;
      const max = target.max;
      const value = target.value;
      target.style.backgroundSize =
        ((value - min) * 100) / (max - min) + "% 100%";
      this.$emit("progress-change", value);
    },
  },
};
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  height: 4px;
  width: 100%;
  margin: 2px;
  border-radius: 8px;
  transition: 0.2s ease;
  background-color: #5e5e5e;
  background-image: linear-gradient(white, white);
  background-repeat: no-repeat;
  background-size: 70% 100%;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  /* display: none; */
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--theme-active-color);
}
input[type="range"]:hover {
  background-image: linear-gradient(#1ed760, #1ed760);
}
input[type="range"]::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  display: block;
  background-color: var(--hover-color);
  transition: 0.3s ease-in-out;
}
</style>
