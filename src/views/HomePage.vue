<template>
	<div class="home-page gy-4 pt-4 px-lg-4 px-sm-3">
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
import SectionHead from "@/components/common/SectionHead.vue";
import SectionNormal from "@/components/common/SectionNormal.vue";
import TrackNormal from "@/components/common/TrackNormal.vue";
export default {
	name: "HomePage",
	components: { SectionHead, SectionNormal, TrackNormal },
	data() {
		return {};
	},
	mounted() {
		this.getData();
	},
	methods: {
		getData() {
			if (window.location.hash) {
				const hash = window.location.hash.substring(1);
				const params = new URLSearchParams(hash);
				const accessToken = params.get("access_token");
				const tokenType = params.get("token_type");
				const expiresIn = params.get("expires_in");
				const data = { accessToken, tokenType, expiresIn };
				this.$store.dispatch("user/setAuthInfo", data);
				window.history.replaceState(null, null, window.location.pathname);
			}
		},
	},
};
</script>

<style>
.home-page {
	height: 200vh;
}
</style>
