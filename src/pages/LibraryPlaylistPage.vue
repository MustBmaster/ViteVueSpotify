<template>
  <div>
    <SectionNormal>
      <div class="col-4">
        <div class="liked-song rounded h-100">
          <div class="text-elipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            fugit, praesentium ad facere minus cupiditate dignissimos error vel
            dolorum quo ullam, sint quam porro. Ipsum corporis repellat ut
            suscipit ipsaddđ Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Blanditiis, ut labore. Nostrum error ut, adipisci eligendi
            facilis ipsum nihil quis atque at libero quasi dignissimos
            aspernatur ullam quo saepe laboriosam!.
          </div>
          <div>
            <h3>Liked Songs</h3>
            <div>20 likes Song</div>
          </div>
        </div>
      </div>
      <TrackNormal />
      <TrackNormal />
      <TrackNormal />
      <TrackNormal />
      <TrackNormal />
      <TrackNormal />
    </SectionNormal>
  </div>
</template>

<script>
import SectionNormal from "@/components/common/SectionNormal.vue";
import TrackNormal from "@/components/common/TrackNormal.vue";
export default {
  components: { SectionNormal, TrackNormal },
};
</script>

<style scoped>
.liked-song {
  background: linear-gradient(149.46deg, #450af5, #8e8ee5 99.16%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
}
.text-elipsis {
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: justify;
}
</style>
