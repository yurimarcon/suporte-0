import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import ticket from './ticket'
import admUser from './admUser'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    ticket,
    admUser
  }
})
