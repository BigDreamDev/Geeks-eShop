<template>
  <v-app dark>
    <v-app-bar class="h-16" dark>
      <!-- <v-btn text color="black" class="hover:cursor-pointer">Laptops</v-btn> -->
      <Navbar class="mb-4" @toggle-mobile="toggleMobileWindow"></Navbar>
    </v-app-bar>

    <component :is="currentComponent"></component>

    <v-navigation-drawer v-model="mobileWindow" class="z-50" dark absolute top>
      <v-list nav dense>
        <nuxt-link tag="div" class="hover:cursor-pointer" to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ homeIcon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Home </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          :append-icon="menuIcon"
          no-action
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title class="text-white">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="child in item.items" :key="child.title">
            <nuxt-link
              tag="div"
              class="hover:cursor-pointer"
              :to="`/product-details/${child.id}`"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </nuxt-link>
          </v-list-item>
        </v-list-group>
        <v-list-group
          v-for="guide in guides"
          :key="guide.title"
          v-model="guide.active"
          :prepend-icon="guide.action"
          :append-icon="menuIcon"
          no-action
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title class="text-white">{{
                guide.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="child in guide.items" :key="child.title">
            <nuxt-link
              tag="div"
              class="hover:cursor-pointer"
              :to="`/guides/${child.id}`"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </nuxt-link>
          </v-list-item>
        </v-list-group>

        <nuxt-link tag="div" class="hover:cursor-pointer" to="/about-us">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ aboutIcon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>About us</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>

        <nuxt-link tag="div" class="hover:cursor-pointer" to="/faqs">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ faqsIcon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>FAQs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-zinc-900">
      <!-- <v-container class="p-0" fluid> -->
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        fixed
        bottom
        right
        class="z-50 bg-zinc-600"
        @click="scroll"
      >
        <v-icon class="text-red-500" size="24px"> {{ btnIcon }} </v-icon>
      </v-btn>
      <v-snackbar v-model="snackbarVisible">
        <p class="text-red-600 font-bold text-xl my-auto text-center">
          {{ snackbarText }}
        </p>
      </v-snackbar>
      <nuxt />
      <div v-once id="snipcart" hidden :data-api-key="snipcartKey"></div>
      <!-- </v-container> -->
    </v-main>

    <v-footer dark padless>
      <v-row class="flex flex-col" justify="center" align="center" no-gutters>
        <div class="flex flex-row justify-center flex-wrap">
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            :v-scroll-to="{ el: link.hash }"
            :to="{ path: link.path, hash: link.hash }"
            class="my-2"
          >
            {{ link.name }}
          </v-btn>
        </div>
        <v-card
          text
          tile
          class="indigo self-center lighten-1 white--text text-center"
        >
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
            digital life for everyone. We're always in search of incredible
            ideas and experiences.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>My-EShop</strong>
          </v-card-text>
        </v-card>
      </v-row>
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
  mdiLaptop,
  mdiDesktopMac,
  mdiChevronDown,
  mdiHome,
  mdiInformation,
  mdiHeadQuestion,
  mdiChatQuestion,
} from "@mdi/js"
import { mapState } from "vuex"
import LaptopsQuery from "~/apollo/queries/laptops.gql"
import DesktopssQuery from "~/apollo/queries/desktops.gql"
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
      faqsIcon: mdiChatQuestion,
      homeIcon: mdiHome,
      aboutIcon: mdiHeadQuestion,
      infoIcon: mdiInformation,
      drawer: true,
      mobileWindow: false,
      laptops: [],
      desktops: [],
      group: null,
      btnIcon: mdiChevronUp,
      snipcartKey: process.env.SNIPCART,
      icons: [mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram],
      links: [
        { name: "Home", hash: "", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Featured Products", hash: "#featured-products", path: "/" },
        { name: "Deals", hash: "#deals", path: "/" },
        { name: "Guides", hash: "#guides", path: "/" },
        { name: "Contact Us", hash: "", path: "/contact-us" },
      ],
      fab: false,
      snackbar: false,
      guides: [
        {
          action: mdiInformation,
          active: false,
          items: [
            { title: "Extend your PC's lifespan", id: 1 },
            { title: "Rocket League nails it", id: 2 },
            { title: "Quiet your Laptop", id: 3 },
            { title: "NEW RTX GPUs", id: 4 },
            { title: "CES Gaming Gears", id: 5 },
          ],
          title: "Guides",
        },
      ],
      items: [
        {
          action: mdiLaptop,
          active: false,
          items: null,
          title: "Laptops",
        },
        {
          action: mdiDesktopMac,
          active: true,
          items: null,
          title: "Desktops",
        },
      ],
    }
  },
  computed: {
    menuIcon() {
      return mdiChevronDown
    },
    ...mapState(["registrationModal", "currentComponent", "snackbarText"]),
    // ...mapGetters(["snackbarVisible"]),
    // ...mapGetters(["isMobileWindowOpen"]),
    snackbarVisible: {
      get() {
        return this.$store.getters.snackbarVisible
      },
      set() {
        return this.$store.commit("hideSnackbar")
      },
    },
    // isMobileWindowOpen: {
    //   get() {
    //     return this.$store.getters.isMobileWindowOpen
    //   },
    //   set() {
    //     return this.$store.commit("closeMobileWindow")
    //   },
    // },
  },
  mounted() {
    this.items[0].items = this.desktops?.data?.attributes.products.data.map(
      (desktop) => {
        return {
          title: desktop.attributes.model,
          id: desktop.id,
        }
      }
    )
    this.items[1].items = this.laptops?.data?.attributes.products.data.map(
      (laptop) => {
        return {
          title: laptop.attributes.model,
          id: laptop.id,
        }
      }
    )
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
    closeMobileWindow() {
      this.$store.commit("closeMobileWindow")
    },
    toggleMobileWindow() {
      this.mobileWindow = !this.mobileWindow
    },
  },
  apollo: {
    laptops: {
      query: LaptopsQuery,
    },
    desktops: {
      query: DesktopssQuery,
    },
  },
}
</script>

<style scoped></style>
