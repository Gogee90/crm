import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ordres: null,
    clients: null,
    services: null
  },
  mutations: {
    setClients(state, payload) {
      state.clients = payload
    },
    setOrders(state, payload) {
      state.ordres = payload
    },
    setServices(state, payload) {
      state.services = payload
    }
  },
  actions: {
    asignClients(context, data) {
      context.commit('setClients', data)
    },
    asignOrders(context, data) {
      context.commit('setOrders', data)
    },
    asignServices(context, data) {
      context.commit('setServices', data)
    }
  },
  getters: {
    getClients(state) {
      return state.clients
    },
    getOrders(state) {
      return state.ordres
    },
    getServices(state) {
      return state.services
    }
  }
})
