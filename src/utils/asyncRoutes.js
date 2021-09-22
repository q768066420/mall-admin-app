const asyncArr = {
  coustomer: [
    '商品',
    '商品列表',
    '添加商品',
    '商品编辑',
  ],
  admin: [
    '商品',
    '商品列表',
    '添加商品',
    '商品管理',
    '商品编辑',
  ],
};
export default function (routes, store) {
  const asyncRoutesArr = asyncArr[store];
  const routeArr = routes.filter((item) => {
    const obj = item;
    if (asyncRoutesArr.indexOf(item.meta.title) !== -1) {
      if (obj.children && obj.children.length > 0) {
        obj.children = obj.children.filter((it) => {
          if (asyncRoutesArr.indexOf(it.meta.title) !== -1) {
            return true;
          }
          return false;
        });
      }
      return true;
    }

    return false;
  });
  return routeArr;
}
