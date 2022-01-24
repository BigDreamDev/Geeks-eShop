import userInfoQuery from "~/apollo/queries/userInfo.gql"

export const state = () => ({
  currentTab: 0,
  registrationModal: false,
  jwt: null,
  isLoggedIn: false,
  user: null,
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
  setUser(state, payload) {
    state.user = payload
  },
  triggerLoggedIn(state) {
    state.isLoggedIn = !state.isLoggedIn
  },
}

export const actions = {
  updateUserInfo({ commit, state }) {
    console.log(this)
    const apollo = this.app.apolloProvider.defaultClient
    apollo
      .query({
        query: userInfoQuery,
        context: {
          headers: {
            Authorization: `Bearer ${state.jwt}`,
          },
        },
      })
      .then((res) => commit("setUser", res.data.userInfo))
      .then(commit("triggerLoggedIn"))
  },
}
