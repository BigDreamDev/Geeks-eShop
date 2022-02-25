<template>
  <div>
    <v-dialog
      v-model="registrationModal"
      dark
      width="500"
      height="600"
      @click:outside="closeModal"
    >
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
          <span
            class="mr-4 hover:cursor-pointer"
            :class="currentComponent === 'Register' ? 'text-main' : ''"
            @click="triggerRegistration('Register')"
            >{{ currentTitle }}</span
          >
          <span v-if="step === 1">|</span>
          <span
            v-if="step === 1"
            class="ml-4 hover:cursor-pointer"
            :class="currentComponent === 'Login' ? 'text-main' : ''"
            @click="triggerRegistration('Login')"
            >Log In</span
          >
          <v-avatar
            class="subheading ml-auto bg-main white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-text-field v-model="email" label="Email"></v-text-field>
              <span class="text-caption grey--text text--darken-1">
                This is the email you will use to login to your account
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-text-field label="Password" type="password"></v-text-field>
              <v-text-field
                v-model="password"
                label="Confirm Password"
                type="password"
              ></v-text-field>
              <span class="text-caption grey--text text--darken-1">
                Please enter a password for your account
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="text-h6 font-weight-light mb-2">Welcome to E-Shop</h3>
              <span class="text-caption grey--text"
                >Thanks for signing up!</span
              >
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="bg-main text-white"
            depressed
            @click.prevent="step++, submit()"
          >
            <span class="text-white">{{ buttonTitle }}</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex"
import registerUser from "~/apollo/mutations/registerUser"
export default {
  data: () => ({
    step: 1,
    dialog: false,
    email: "",
    password: "",
    register: "",
  }),
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up"
        case 2:
          return "Create a password"
        default:
          return "Account created"
      }
    },
    ...mapState(["registrationModal", "currentComponent"]),
    buttonTitle() {
      if (this.step === 3) {
        return "Finish"
      } else {
        return "Next"
      }
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("triggerRegistrationModal")
    },
    submit() {
      const { email: user, password } = this.$data
      if (this.step === 3) {
        this.$apollo
          .mutate({
            mutation: registerUser,
            variables: {
              username: user,
              email: user,
              password,
            },
          })
          .then((res) => {
            this.$store.commit("updateJWT", res.data.register.jwt)
          })
      } else if (this.step === 4) {
        this.closeModal()
      }
    },
    triggerRegistration(component) {
      this.$store.commit("triggerCurrentComponent", component)
    },
  },
}
</script>

<style scoped></style>
