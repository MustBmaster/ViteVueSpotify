import { createStore } from "vuex";
import getters from "./getter";

//import các module của store động
const modulesFiles = import.meta.glob("./modules/*.js");
const modules = {};
for (const path in modulesFiles) {
	const moduleName = path.match(/\.\/modules\/(.*)\.js$/)[1]; // Lấy tên file làm tên module
	const module = await modulesFiles[path](); // Dùng await để import từng module (vì là dynamic import)
	modules[moduleName] = module.default;
}

//khai báo store, nhặt ra các getter và module sử dụng
const store = createStore({
	modules,
	getters,
});

export default store;
