import request from '../utils/Request'
import Func from '../utils/Func'
export function fetchLogin(data){
  return request('/xxxxxx', {
    body:Func.toFormData(data),
    method:'POST',
    loading:true
  })
}