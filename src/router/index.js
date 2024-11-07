import { createRouter, createWebHistory } from "vue-router";

//các route
export const constantRoutes = [
	// {
	// 	path: "/",
	// 	name: "Home",
	// 	component: () => import("@view/Home.vue"),
	// 	meta: { title: "Home" },
	// },
	{
		path: "/login",
		name: "Login",
		component: () => import("@views/LoginPage.vue"),
		meta: { title: "Home" },
	},
];

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes,
});

export default router;
