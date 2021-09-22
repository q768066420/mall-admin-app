import axios from '@/axios';
// 获取下拉列表关键词
export function pullKeyword(params) {
  return axios.get('/category/all', params);
}
// 查询产品信息
export function pullAll(params) {
  return axios.get('/products/all', { params });
}
// 删除商品信息
export function reomvePro(params) {
  return axios.delete(`/products/${params}`);
}
// 提交商品信息
export function sumbitPro(params) {
  return axios.post('/products/add', params);
}
// 获取某一条产品
export function getPro(id) {
  return axios.get(`/products/${id}`);
}
// 编辑产品信息
export function editPro(params) {
  return axios.put('/products/edit', params);
}
