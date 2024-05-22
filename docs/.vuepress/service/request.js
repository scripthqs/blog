import axios from 'axios'
const ThirdParty = {
  frDic: {
    baseURL: 'https://api.frdic.com/api/open/v1/',
    headers: {
      'Authorization': 'NIS OQC9MjpxGzZadlvVYqVCGxohyK4Pm0DlM+Epko3rHwabg7+myLbi4g==',
      'Content-Type': 'application/json',
    },
  },
};

function createRequest({ baseURL, headers }) {
  const request = axios.create({
    baseURL,
    timeout: 1000 * 600,
  });

  // 请求前拦截
  request.interceptors.request.use(
    (config) => {
      config.headers = headers;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 返回结果前拦截
  request.interceptors.response.use((response) => {
    return response.data;
  });

  return request;
}

export function ThirdPartyRequest(apiName) {
  const config = ThirdParty[apiName];
  if (!config) {
    throw new Error(`No API found with name: ${apiName}`);
  }
  return createRequest(config);
}
