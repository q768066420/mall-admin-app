import home from '../views/layout/Home.vue';

export default [
  {
    path: '/product',
    name: 'Product',
    component: home,
    meta: {
      title: '商品',
      limit: true,
      hidden: false,
    },
    children: [
      {
        path: 'ProductList',
        name: 'ProductList',
        component: () => import('../views/page/productList.vue'),
        meta: {
          title: '商品列表',
          limit: true,
        },
      }, {
        path: 'ProductAdd',
        name: 'ProductAdd',
        component: () => import('../views/page/productAdd.vue'),
        meta: {
          title: '添加商品',
          limit: true,
        },
      }, {
        path: 'productMange',
        name: 'ProductMange',
        component: () => import('../views/page/productMange.vue'),
        meta: {
          title: '商品管理',
          limit: true,
        },
      },
      {
        path: 'edit/:id',
        name: 'ProductEdit',
        component: () => import('../views/page/productAdd.vue'),
        meta: {
          title: '商品编辑',
          limit: true,
          hidden: false,
        },
      },
    ],
  },
];
