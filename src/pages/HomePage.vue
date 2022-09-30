<template>
  <div class="home-page gy-4">
    <SectionHead />
    <SectionNormal>
      <TrackNormal></TrackNormal>
      <TrackNormal></TrackNormal>
      <TrackNormal></TrackNormal>
      <TrackNormal></TrackNormal>
      <TrackNormal></TrackNormal>
      <TrackNormal></TrackNormal>
    </SectionNormal>
  </div>
</template>

<script>
import SectionHead from "../components/common/SectionHead.vue";
import SectionNormal from "../components/common/SectionNormal.vue";
import TrackNormal from "@/components/common/TrackNormal.vue";
export default {
  name: "HomePage",
  components: { SectionHead, SectionNormal, TrackNormal },
};
</script>

<style>
.home-page {
  height: 200vh;
}
</style>
