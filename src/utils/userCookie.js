import Cookies from 'js-cookie';
// 删除用户信息
export function removeUserInfo() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
}
// 获取用户信息
export function getUserInfo() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}
// 添加用户信息
export function setUserInfo(userInfo) {
  const userArr = Object.entries(userInfo);
  for (let i = 0; i < userArr.length; i += 1) {
    Cookies.set(userArr[i][0], userArr[i][1]);
  }
  return true;
}
