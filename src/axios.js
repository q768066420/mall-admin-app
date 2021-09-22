import assios from 'axios';
import store from './store';

const instance = assios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
instance.interceptors.request.use((config) => {
  if (config.url.includes('/passport')) {
    return config;
  }
  return {
    ...config,
    params: {
      ...config.params,
      appkey: store.state.user.user.appkey,
    },
  };
}, (error) => { Promise.reject(error); });

instance.interceptors.response.use((repsonce) => {
  if (repsonce.data.status === 'fail') {
    return Promise.reject(repsonce.data.msg);
  }
  return repsonce.data;
}, (error) => Promise.reject(error));
export default instance;
