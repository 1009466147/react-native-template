import { USER_NAMESPACE } from '../constans/namespace'

export function FETCH_LOGIN(payload) {
  return {
    type: `${USER_NAMESPACE}/fetchLogin`,
    payload
  };
}
