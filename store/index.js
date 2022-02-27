import userInfoQuery from "~/apollo/queries/userInfo.gql"
import loginUser from "~/apollo/mutations/loginUser"

export const state = () => ({
  mobileWindow: true,
  currentTab: 0,
  registrationModal: false,
  jwt: null,
  isLoggedIn: false,
  user: null,
  currentComponent: "Register",
  snackbarText: null,
  snackbarVisible: false,
})

export const getters = {
  currentTab: (state) => {
    return state.currentTab
  },
  snackbarVisible: (state) => {
    return state.snackbarVisible
  },
  isMobileWindowOpen: (state) => {
    return state.mobileWindow
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
  loggedin(state) {
    state.snackbarVisible = true
    state.snackbarText = "Logged In Successfully"
    state.isLoggedIn = true
  },
  signout(state) {
    state.user = null
    state.jwt = null
    state.snackbarVisible = true
    state.snackbarText = "Signed Out Successfully"
    state.isLoggedIn = false
  },
  hideSnackbar(state) {
    state.snackbarVisible = false
    state.snackbarText = ""
  },
  updateSnackbar(state, payload) {
    state.snackbarText = payload
    state.snackbarVisible = true
  },
  toggleMobileWindow(state) {
    state.mobileWindow = !state.mobileWindow
  },
  closeMobileWindow(state) {
    state.mobileWindow = false
  },
}

export const actions = {
  async updateUserInfo({ commit, state }) {
    const apollo = this.app.apolloProvider.defaultClient
    const res = await apollo.query({
      query: userInfoQuery,
      context: {
        headers: {
          Authorization: `Bearer ${state.jwt}`,
        },
      },
    })

    commit("setUser", res.data.userInfo)
  },

  async login({ commit }, payload) {
    const apollo = this.app.apolloProvider.defaultClient
    const res = await apollo.mutate({
      mutation: loginUser,
      variables: {
        identifier: payload.email,
        password: payload.password,
      },
    })
    commit("updateJWT", res.data.login.jwt)
    commit("loggedin")
    commit("triggerRegistrationModal")

    const clearState = setTimeout(() => {
      commit("hideSnackbar")
    }, 2000)
    clearTimeout(clearState)
  },

  signout({ commit }) {
    commit("signout")
    const clearState = setTimeout(() => {
      commit("hideSnackbar")
    }, 2000)
    clearTimeout(clearState)
  },

  showNotification({ commit }, payload) {
    commit("updateSnackbar", payload)
    const clearState = setTimeout(() => {
      commit("hideSnackbar")
    }, 2000)
    clearTimeout(clearState)
  },
}
