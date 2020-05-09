
import { USER_NAMESPACE } from '../constans/namespace';
import { fetchLogin } from '../service/user'
import { navigate } from '../navigator/RootNavigation'
import {setToken} from '../utils/Authority'
export default {
  namespace: USER_NAMESPACE,
  state: {
    data: {},
  },
  effects: {
    *fetchLogin({ payload }, { call, put }) {
      const response = yield call(fetchLogin, payload);
      if (response.success) {
        
        yield put({
          type: 'save',
          payload: response.data,
        });
        setToken(response.data.token);
        navigate('Tab')
      }
    },

  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  }
};
