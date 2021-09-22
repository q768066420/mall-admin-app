import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';
import asyRoutes from './asyRoutes';
import dnyRouter from '../utils/asyncRoutes';

Vue.use(VueRouter);

const xs = VueRouter.prototype.push;
VueRouter.prototype.push = function push(loaction, onResolve, onReject) {
  if (onReject || onResolve) {
    return xs.call(this, loaction, onResolve, onReject);
  }
  return xs.call(this, loaction).catch((err) => err);
};

const router = new VueRouter({
  routes,
  mode: 'history',
});
let isAddRouter = false;
router.beforeEach((to, from, next) => {
  if (to.meta.limit || (typeof to.meta.limit) === 'undefined') {
    if (store.state.user.user.appkey && store.state.user.user.username) {
      const dnyRoute = dnyRouter(asyRoutes, store.state.user.user.role);
      if (!isAddRouter) {
        // router.addRoute(dnyRoute);
        // router.options.routes.push(...dnyRoute);
        store.dispatch('router/setUserInfoAct', routes.concat(dnyRoute)).then(() => {
          router.addRoutes(dnyRoute);
          next();
        });
        isAddRouter = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});

export default router;
