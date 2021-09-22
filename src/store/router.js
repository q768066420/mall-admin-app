export default {
  namespaced: true,
  state: {
    userInfo: [],
  },
  mutations: {
    setUserInfo(state, parmse) {
      state.userInfo = parmse;
    },
  },
  actions: {
    setUserInfoAct(ctx, parmse) {
      ctx.commit('setUserInfo', parmse);
    },
  },
};
