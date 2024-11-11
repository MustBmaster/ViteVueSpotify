import { createRouter, createWebHistory } from "vue-router";

//các route
export const constantRoutes = [
	{
		path: "/home",
		name: "Home",
		component: () => import("@views/HomePage.vue"),
		meta: { title: "Home" },
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@views/LoginPage.vue"),
		meta: { title: "Login" },
	},
];

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes,
});

export function resetRouter() {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher; // reset router
}

export default router;
