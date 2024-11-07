import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 3000,
		host: "localhost",
		open: true,
		hmr: {
			protocol: "ws", // Sử dụng WebSocket cho HMR (mặc định)
			host: "localhost", // Đặt host nếu cần
			port: 3000, // Đặt cổng cho HMR (cùng cổng với server)
			overlay: true, // Hiện thông báo lỗi trên trang nếu có lỗi HMR
		},
	},
	resolve: {
		//Các alias đường dẫn của dự án @
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@components": fileURLToPath(new URL("./src/components", import.meta.url)),
			"@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
			"@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
			"@router": fileURLToPath(new URL("./src/router", import.meta.url)),
			"@store": fileURLToPath(new URL("./src/store", import.meta.url)),
			"@views": fileURLToPath(new URL("./src/views", import.meta.url)),
			"@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
			"@libs": fileURLToPath(new URL("./src/libs", import.meta.url)),
			// '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
			// '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
			// '@mixins': fileURLToPath(new URL('./src/mixins', import.meta.url)),
			"~bootstrap": fileURLToPath(new URL("./node_modules/bootstrap", import.meta.url)),
		},
	},
});
