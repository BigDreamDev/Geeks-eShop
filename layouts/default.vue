<template>
  <v-app dark>
    <v-app-bar class="h-16" dark>
      <!-- <v-btn text color="black" class="hover:cursor-pointer">Laptops</v-btn> -->
      <Navbar class="mb-4"></Navbar>
    </v-app-bar>
    <component :is="currentComponent"></component>
    <v-main>
      <v-container class="p-0" fluid>
        <v-btn
          v-show="fab"
          v-scroll="onScroll"
          fab
          fixed
          bottom
          right
          class="z-50"
          @click="scroll"
        >
          <v-icon class="text-main" size="24px"> {{ btnIcon }} </v-icon>
        </v-btn>
        <v-snackbar v-model="snackbarVisible">
          <p class="text-red-600 font-bold text-xl my-auto text-center">
            {{ snackbarText }}
          </p>
        </v-snackbar>
        <nuxt />
        <div v-once id="snipcart" hidden :data-api-key="snipcartKey"></div>
      </v-container>
    </v-main>
    <v-footer dark padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-row>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          E-SHOP is passionate about technology and driven by innovation. We
          dream, we dare and we strive to create an effortless and joyful
          digital life for everyone. We're always in search of incredible ideas
          and experiences.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>My-EShop</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import {
  mdiChevronUp,
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram,
} from "@mdi/js"
import { mapState, mapGetters } from "vuex"
import Register from "~/components/Register.vue"
import Login from "~/components/Login.vue"
import Navbar from "~/components/Navbar.vue"
export default {
  name: "Default",
  components: {
    Register,
    Login,
    Navbar,
  },
  data() {
    return {
      btnIcon: mdiChevronUp,
      snipcartKey: process.env.SNIPCART,
      icons: [mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram],
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
      fab: false,
      snackbar: false,
    }
  },
  computed: {
    ...mapState(["registrationModal", "currentComponent", "snackbarText"]),
    ...mapGetters(["snackbarVisible"]),
    snackbarVisible: {
      get() {
        return this.$store.getters.snackbarVisible
      },
      set() {
        return this.$store.commit("hideSnackbar")
      },
    },
  },
  methods: {
    scroll() {
      if (typeof window === "undefined") return
      window.scrollTo(0, 0)
    },
    onScroll(e) {
      if (typeof window === "undefined") return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
  },
}
</script>

<style scoped></style>
