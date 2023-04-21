import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    loggin: false,
    muestra: false
  },
  getters: {
  },
  mutations: {
    valida(state, payload){
      let encontro = payload.users.map(element=> element.email).indexOf(payload.user)
      if (encontro !== -1) {
        if (payload.pass === payload.users[encontro].password) {
          state.loggin = true
        }else{
          state.loggin = false
          state.muestra = true
        }
      }else{
        state.muestra = true
        state.loggin = false
      }
      if(state.loggin) {
        router.push('/home')
      }
    },
    logout(state) {
      state.loggin = false
      router.push('/login')
    }
  },
  actions: {
  },
  modules: {
  }
})
