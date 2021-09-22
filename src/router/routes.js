import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';
import LoginPage from '../views/layout/components/LoginPage.vue';
import LoginSign from '../views/layout/components/LoginSign.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      limit: true,
      title: '首页',
      hidden: false,
    },
    children: [
      {
        path: 'index',
        name: 'Statistics',
        component: () => import('../views/page/index.vue'),
        meta: {
          limit: true,
          title: '统计',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登陆首页',
      hidden: true,
      limit: false,
    },
    children: [
      {
        name: 'loginPage',
        path: '',
        component: LoginPage,
        meta: {
          title: '登陆',
          limit: false,
        },
      },
      {
        name: 'loginSign',
        path: '/sign',
        component: LoginSign,
        meta: {
          title: '注册',
          limit: false,
        },
      },
    ],
  },
];
