import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'foobar'
  },
  withCredentials: true
});

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    console.log(error);
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response) {
      // 请求已发出，但服务器返回状态码不是 2xx
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);

      // 将错误信息包装在Error对象中并抛出
      throw new Error(JSON.stringify(error.response.data));
    } else if (error.request) {
      // 请求发出，但没有收到响应
      console.error('No response received:', error.request);
    } else {
      // 其他错误
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default instance;