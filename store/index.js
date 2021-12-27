export const state = () => ({
  currentTab: 0,
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
}

export const actions = {
  // updateActionValue({ commit }) {
  //   commit('updateValue', payload)
  // }
}
