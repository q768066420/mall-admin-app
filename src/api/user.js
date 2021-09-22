import axios from '@/axios';

// 提交登陆信息
export function login(params) {
  return axios.post('/passport/login', params);
}

// 获取验证码
export function getCode(params) {
  return axios.post('/passport/getCode', params);
}

// 提交注册信息
export function sendSign(params) {
  return axios.post('/passport/logon', params);
}
