<template>
	<div style="height: 100vh" class="d-flex flex-column">
		<div class="logobar p-3">
			<a href="#" class="logo">
				<img
					src="@assets/logo-and-brand-assets/Spotify_Logo_RGB_White.png"
					alt="logo and brand"
					class="brand-logo"
				/>
			</a>
		</div>
		<div class="gradient-bg d-flex justify-content-center align-items-top flex-grow-1">
			<div class="login-container p-4 rounded m-5 d-flex flex-column align-items-center gap-3">
				<img
					src="@assets/logo-and-brand-assets/Spotify_Primary_Logo_RGB_White.png"
					alt="logo"
					class="logo"
				/>
				<h1 class="login-title">Login to start listening</h1>
				<v-btn rounded="xl" size="large" class="btn-spotify">Click to login</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoginPage",
	data() {
		return {};
	},
	methods: {
		login() {
			window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.APP_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&response_type=token&show_dialog=true`;
		},
	},
};
</script>

<style scoped lang="scss">
.gradient-bg {
	background: linear-gradient(to top, var(--background), var(--background-elevated-highlight));
}

.logobar {
	background-color: var(--background);
}
.brand-logo {
	height: 32px;
}
.logo {
	height: 48px;
}
.login-container {
	background-color: var(--background-base);
	width: 100%;
	max-width: 734px;
}
.btn-spotify {
	background-color: var(--spotify-green);
	border-color: var(--spotify-green);
	color: black;
	font-weight: 600;
	font-size: 1rem;
	transition: background-color 0.3s ease;
}
.login-title {
	font-size: 2em;
	font-weight: bold;
	text-align: center;
}
</style>
