import fetch from 'isomorphic-fetch';
import {API} from '../config';

export const signup = (user)=>{
  return fetch(`${API}/signup`,{
    method: 'POST',
    header: {
      Accept:'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response=>{
    return response.json()
  }).catch(err=> console.log(err))
}

export const signin = (user)=>{
  return fetch(`${API}/signin`,{
    method: 'POST',
    header: {
      Accept:'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response=>{
    return response.json()
  }).catch(err=> console.log(err))
}

export const setCookie = (key, value) =>{
  if (process.browser) {
    cookie.set(key,value,{
      expires: 1
    })
  }
}

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key,{
      expires: 1
    })
  }
}
