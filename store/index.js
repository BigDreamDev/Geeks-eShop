export const state = () => ({
  currentTab: 0,
  registrationModal: false,
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
}

export const actions = {
  // updateActionValue({ commit }) {
  //   commit('updateValue', payload)
  // }
}
