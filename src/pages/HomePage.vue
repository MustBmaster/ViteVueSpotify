<template>
  <div class="home-page container-fluid pt-4 px-lg-4 px-sm-3 col gy-4">
    <SectionHead />
    <SectionNormal />
  </div>
</template>

<script>
import SectionHead from "@/components/common/SectionHead.vue";
import SectionNormal from "@/components/common/SectionNormal.vue";
export default {
  name: "HomePage",
  components: { SectionHead, SectionNormal },
};
</script>

<style>
.home-page {
  background-color: var(--page-theme);
  height: 200vh;
}
</style>
