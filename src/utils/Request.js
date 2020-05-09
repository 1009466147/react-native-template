import { getToken, removeAll } from './Authority';
import BaseUrl from '../config/BaseUrl';
import { Portal, Toast } from '@ant-design/react-native'

let needLoadingRequestCount = 0
const showFullScreenLoading = text => {
  if (needLoadingRequestCount === 0) {
    startLoading(text)
  }
  needLoadingRequestCount++
}

const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

let loading = null;

const startLoading = text => {
  loading = Toast.loading(text || '加载中……', 0)
}

const endLoading = () => {
  Portal.remove(loading)
}


const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = response => {
  if (
    (response.status >= 200 && response.status < 300) ||
    // 针对于要显示后端返回自定义详细信息的status, 配置跳过
    (response.status === 400 || response.status === 500)
  ) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  if(response.status !== 401 ) {

  }
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

const checkServerCode = response => {

  if (response.code >= 200 && response.code < 300) {
    return response;
  }
  // do something
  if (response.code === 400) {
    
  } else if (response.code === 401) {

  } else if (response.code === 404) {

  } else if (response.code === 500) {

  }
  return response;
};


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, option) {
  const options = {
    ...option,
  };


  const defaultOptions = {
    // credentials: 'include',
    mode: "cors",  
  };
  const newOptions = { ...defaultOptions, ...options };

  newOptions.headers = {
    ...newOptions.headers,
    // 客户端认证
    // Authorization: `Basic ${Base64.encode(`${clientId}:${clientSecret}`)}`,
  };

  const token = await getToken();

  if (token) {
    newOptions.headers = {
      ...newOptions.headers,
      // token鉴权
      'geeboo-Auth': token,
    };
  }

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }


  if(newOptions.loading){
    showFullScreenLoading();
  }
  return fetch(BaseUrl+url, newOptions)
    .then(checkStatus)
    // .then(response => cachedSave(response, hashcode))
    .then(response => {
      if(newOptions.loading){
        tryHideFullScreenLoading()
      }
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .then(checkServerCode)
    .catch(e => {
      if(newOptions.loading){
        tryHideFullScreenLoading()
      }
      console.log(e.response)
      const status = e.name;
      if (status === 401) {
        // @HACK
        /* eslint-disable no-underscore-dangle */
        // window.g_app._store.dispatch({
        //   type: 'login/logout',
        // });
        return;
      }

    });
}
