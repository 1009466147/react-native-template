import { storage } from './Storage'

export function getToken() {
  return new Promise((resolve)=>{
    storage.load('sword-token',(token) => {
      resolve(token)
    });
  })

}

export function setToken(token) {
  storage.save('sword-token', token);
}

// export function getCurrentUser() {
//   return JSON.parse(localStorage.getItem('sword-current-user'));
// }

// export function setCurrentUser(account) {
//   localStorage.setItem('sword-current-user', JSON.stringify(account));
// }

export function removeAll() {
  // storage.clearMap();
  storage.remove('sword-token')
}
