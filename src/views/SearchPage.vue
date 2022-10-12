<template>
  <div class="pt-4 px-lg-4 px-sm-3 gy-4">
    <SectionNormal>
      <TrackNormal />
    </SectionNormal>
    <SectionNormal>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
      <ItemGenre></ItemGenre>
    </SectionNormal>
  </div>
</template>

<script>
import SectionNormal from "@/components/common/SectionNormal.vue";
import ItemGenre from "@/components/common/ItemGenre.vue";
import TrackNormal from "../components/common/TrackNormal.vue";
export default {
  name: "SearchPage",
  components: { SectionNormal, ItemGenre, TrackNormal },
};
</script>

<style></style>
