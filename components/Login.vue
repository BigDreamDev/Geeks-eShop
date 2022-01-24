<template>
  <div>
    <v-dialog
      v-model="registrationModal"
      width="500"
      height="600"
      @click:outside="closeModal"
    >
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
          <span
            class="mr-4 hover:cursor-pointer"
            :class="currentComponent === 'Login' ? 'text-main' : ''"
            @click="triggerRegistration('Login')"
            >Log In</span
          >
          |
          <span
            class="ml-4 hover:cursor-pointer"
            :class="currentComponent === 'Register' ? 'text-main' : ''"
            @click="triggerRegistration('Register')"
            >Sign Up</span
          >
        </v-card-title>

        <v-window>
          <v-window-item>
            <v-card-text>
              <v-text-field v-model="email" label="Email"></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-card-text>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn class="bg-main text-white" depressed @click.prevent="login">
            <span class="text-white">Login</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex"
import loginUser from "~/apollo/mutations/loginUser"
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  computed: {
    ...mapState(["registrationModal", "currentComponent"]),
  },
  methods: {
    closeModal() {
      this.$store.commit("triggerRegistrationModal")
    },
    login() {
      console.log(this, "comp")
      this.$apollo
        .mutate({
          mutation: loginUser,
          variables: {
            identifier: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          this.$store.commit("updateJWT", res.data.login.jwt)
        })
      this.$store.commit("triggerRegistrationModal")
      this.$store.dispatch("updateUserInfo")
    },
    triggerRegistration(component) {
      this.$store.commit("triggerCurrentComponent", component)
    },
  },
}
</script>

<style scoped></style>
