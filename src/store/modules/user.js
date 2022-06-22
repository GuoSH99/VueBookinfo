import { getToken, setToken, getUser, setUser, removeToken } from '@/utils/usertoken.js'
import { login, getUserInfo, logout } from '@/api/login'
const state = {
    token: getToken,
    user: getUser
}
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
        setToken(token)
    },
    SET_USER(state, user) {
        state.user = user;
        setUser(user)
    },
}
const actions = {
    Login({ commit }, form) {
        return new Promise((resolve, reject) => {
            login(form.username.trim(), form.password.trim()).then(response => {
                const resp = response.data
                commit('SET_TOKEN', resp.data.token)
                resolve(resp)
            }).catch(error => {
                reject(error)
            });
        })
    },
    GetUserInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getUserInfo(state.token).then(response => {
                const respUser = response.data
                commit('SET_USER', respUser.data)
                resolve(respUser)
            }).catch(error => {
                reject(error)
            })
        })
    },
    Logout({commit,state}){
        return new Promise((resolve,reject)=>{
        logout(state.token).then(response=>{
        const resp=response.data
        commit('SET_TOKEN','')
        commit('SET_USER',null)
        removeToken()
        resolve(resp)
        }).catch(error=>{
        reject(error)
        })
        })
        }
}
export default {
    state,
    mutations, actions
}