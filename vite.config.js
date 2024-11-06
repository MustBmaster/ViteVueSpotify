import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		//Các alias đường dẫn của dự án @
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@components": fileURLToPath(new URL("./src/components", import.meta.url)),
			"@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
			"@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
			"@router": fileURLToPath(new URL("./src/router", import.meta.url)),
			"@store": fileURLToPath(new URL("./src/store", import.meta.url)),
			"@view": fileURLToPath(new URL("./src/view", import.meta.url)),
			// '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
			// '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
			// '@mixins': fileURLToPath(new URL('./src/mixins', import.meta.url)),
		},
	},
});
