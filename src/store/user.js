import { removeUserInfo, getUserInfo, setUserInfo } from '@/utils/userCookie';

export default {
  namespaced: true,
  state: {
    user: getUserInfo(),
  },
  mutations: {
    setUser(state, userInfo) {
      state.user = userInfo;
    },
    removeUser(state) {
      state.user = null;
    },
  },
  actions: {
    setUserAct(ctx, userInfo) {
      setUserInfo(userInfo);
      ctx.commit('setUser', userInfo);
    },
    removeUserAct(ctx) {
      removeUserInfo();
      ctx.commit('removeUser');
    },
  },
};
