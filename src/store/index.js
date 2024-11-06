import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
Vue.use(Vuex);

//import các module của store động
const modulesFiles = import.meta.glob("./modules/*.js");
const modules = {};
for (const path in modulesFiles) {
	modulesFiles[path]().then((module) => {
		const moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, "$1");
		modules[moduleName] = module.default;
	});
}

//khai báo store, nhặt ra các getter và module sử dụng
const store = new Vuex.Store({
	modules,
	getters,
});

export default store;
