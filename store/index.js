export const state = () => ({
  currentTab: 0,
  registrationModal: false,
  jwt: null,
  currentComponent: "Register",
})

export const getters = {
  currentTab: (state) => {
    return state.currentTab
  },
}

export const mutations = {
  changeCurrentTab: (state, payload) => {
    state.currentTab = payload
  },
  triggerRegistrationModal: (state) => {
    state.registrationModal = !state.registrationModal
  },
  updateJWT(state, payload) {
    state.jwt = payload
  },
  triggerCurrentComponent(state, payload) {
    state.currentComponent = payload
  },
}

export const actions = {
  // updateActionValue({ commit }) {
  //   commit('updateValue', payload)
  // }
}
