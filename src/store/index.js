import Vue from 'vue';
import Vuex from 'vuex';
import menu from './menu';
import user from './user';
import router from './router';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    menu,
    user,
    router,
  },
});
export default store;
