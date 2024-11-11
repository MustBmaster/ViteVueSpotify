import router, { resetRouter } from "@/router";

const state = {
	accessToken: null,
	tokenType: null,
	expiresIn: null,
};

const mutations = {
	SET_ACCESS_TOKEN: (state, accessToken) => {
		state.accessToken = accessToken;
	},
	SET_TOKEN_TYPE: (state, tokenType) => {
		state.tokenType = tokenType;
	},
	SET_EXPIRES_IN: (state, expiresIn) => {
		state.expiresIn = expiresIn;
	},
	CLEAR_AUTH_DATA: (state) => {
		state.accessToken = null;
		state.tokenType = null;
		state.expiresIn = null;
		removeToken();
		resetRouter();
	},
};

const actions = {
	// user login
	// login({ commit }, userInfo) {
	//   const { username, password } = userInfo
	//   return new Promise((resolve, reject) => {
	//     login({ username: username.trim(), password: password }).then(response => {
	//       const { data } = response
	//       commit('SET_TOKEN', data.token)
	//       setToken(data.token)
	//       resolve()
	//     }).catch(error => {
	//       reject(error)
	//     })
	//   })
	// },

	// get user info
	// getInfo({ commit, state }) {
	// 	return new Promise((resolve, reject) => {
	// 		getInfo(state.token)
	// 			.then((response) => {
	// 				const { data } = response;
	// 				if (!data) {
	// 					reject("Verification failed, please Login again.");
	// 				}

	// 				const { roles, name, avatar, introduction } = data;

	// 				// roles must be a non-empty array
	// 				if (!roles || roles.length <= 0) {
	// 					reject("getInfo: roles must be a non-null array!");
	// 				}

	// 				commit("SET_ROLES", roles);
	// 				commit("SET_NAME", name);
	// 				commit("SET_AVATAR", avatar);
	// 				commit("SET_INTRODUCTION", introduction);
	// 				resolve(data);
	// 			})
	// 			.catch((error) => {
	// 				reject(error);
	// 			});
	// 	});
	// },

	// set auth info
	setAuthInfo({ commit }, authData) {
		console.log("here", authData);
		commit("SET_ACCESS_TOKEN", authData.access_token);
		commit("SET_TOKEN_TYPE", authData.token_type);
		commit("SET_EXPIRES_IN", authData.expires_in);
	},

	// user logout
	logOut({ commit }) {
		commit("CLEAR_AUTH_DATA");
		removeToken();
		resetRouter();
	},
	// logout({ commit, state, dispatch }) {
	// 	return new Promise((resolve, reject) => {
	// 		logout(state.token)
	// 			.then(() => {
	// 				commit("SET_TOKEN", "");
	// 				commit("SET_ROLES", []);
	// 				removeToken();
	// 				resetRouter();

	// 				// reset visited views and cached views
	// 				// to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
	// 				dispatch("tagsView/delAllViews", null, { root: true });

	// 				resolve();
	// 			})
	// 			.catch((error) => {
	// 				reject(error);
	// 			});
	// 	});
	// },

	// remove token
	// resetToken({ commit }) {
	// 	return new Promise((resolve) => {
	// 		commit("SET_TOKEN", "");
	// 		commit("SET_ROLES", []);
	// 		removeToken();
	// 		resolve();
	// 	});
	// },

	// dynamically modify permissions
	// async changeRoles({ commit, dispatch }, role) {
	// 	const token = role + "-token";
	// 	commit("SET_TOKEN", token);
	// 	setToken(token);
	// 	const { roles } = await dispatch("getInfo");
	// 	resetRouter();
	// 	// generate accessible routes map based on roles
	// 	const accessRoutes = await dispatch("permission/generateRoutes", roles, { root: true });
	// 	// dynamically add accessible routes
	// 	router.addRoutes(accessRoutes);
	// 	// reset visited views and cached views
	// 	dispatch("tagsView/delAllViews", null, { root: true });
	// },
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
