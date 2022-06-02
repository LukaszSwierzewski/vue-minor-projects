export const state = () => ({
  userData: 'asd'
})

export const getters = {}

export const mutations = {
  SET_AUTH_DATA (state, payload) {
    console.log(payload)
    state.userData = payload
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { store, app, $auth }) {
    commit('SET_AUTH_DATA', $auth.$state.user)
    await console.log('xddddd')
  }
}
