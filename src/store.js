import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlUsuarios: 'https://60a42f8cfbd48100179dbb56.mockapi.io/usuarios/',
    usuarios: []
  },

  mutations: {

    getUsuarios(state, respuesta) {
      state.usuarios = respuesta
    },

    deleteUsuario(state, user) {
      const indice = state.usuarios.findIndex(usuario => usuario.id == user.id)
      state.usuarios.splice(indice, 1)
    },

    postUsuario(user) {
      this.usuarios.push(user)
    }
  },

  actions: {
    
    async deleteUsuarioAction({ commit }, id) {
      try {
        const respuesta = await axios.delete(this.state.urlUsuarios + id)
        commit('deleteUsuario', respuesta.data)
      }
      catch (error) {
        console.log(error)
      }
    },

    async getUsuariosAction({ commit }) {
      try {
        const respuesta = await axios(this.state.urlUsuarios)
        commit('getUsuarios', respuesta.data)
      }
      catch (error) {
        console.log(error)
      }
    },
    
    async postUsuarioAction({ commit }, formData) {
      try {
        const respuesta = await axios.post(this.state.urlUsuarios, formData, { 'content-type': 'application/json' })
        commit('postUsuario', respuesta.data)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
})