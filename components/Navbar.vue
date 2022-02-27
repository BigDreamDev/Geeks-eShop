<template>
  <div class="flex md:ml-6 md:mr-6 mt-4 text-white">
    <v-icon
      large
      class="hover:cursor-pointer inline-block lg:hidden mt-1 mr-4"
      @click.stop="toggleMobileWindow"
      >{{ menu }}</v-icon
    >

    <div class="flex flex-row w-full">
      <nuxt-link class="hidden sm:inline-block" to="/">
        <span class="emoji mr-4"> 💻 </span>
      </nuxt-link>
      <button class="snipcart-checkout lg:hidden inline-flex items-center">
        <Cart />
        <span class="snipcart-total-price px-3 font-semibold text-sm"></span>
      </button>
      <div class="lg:flex lg:flex-row hidden">
        <button class="snipcart-checkout inline-flex items-center">
          <Cart />
          <span class="snipcart-total-price px-3 font-semibold text-sm"></span>
        </button>
        <v-divider vertical></v-divider>
        <v-menu
          v-if="$apollo.queries.laptops.loading === false"
          open-on-hover
          offset-y
          dark
        >
          <template #activator="{ on, attrs }">
            <v-btn text dense dark v-bind="attrs" class="mt-1" v-on="on">
              Laptops
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="laptop in laptops.data.attributes.products.data"
              :key="laptop.id"
            >
              <nuxt-link
                class=""
                :to="{
                  path: `/product-details/${laptop.id}`,
                }"
              >
                <v-list-item-title class="text-sm text-white hover:text-main">{{
                  laptop.attributes.model
                }}</v-list-item-title>
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-divider vertical></v-divider>
        <v-menu
          v-if="$apollo.queries.desktops.loading === false"
          open-on-hover
          offset-y
          dark
        >
          <template #activator="{ on, attrs }">
            <v-btn text dense dark v-bind="attrs" class="mt-1" v-on="on">
              Desktops
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="desktop in desktops.data.attributes.products.data"
              :key="desktop.id"
            >
              <nuxt-link
                class=""
                :to="{
                  path: `/product-details/${desktop.id}`,
                }"
              >
                <v-list-item-title class="text-sm text-white hover:text-main">{{
                  desktop.attributes.model
                }}</v-list-item-title>
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-divider vertical></v-divider>
        <v-menu
          v-if="$apollo.queries.desktops.loading === false"
          open-on-hover
          offset-y
          dark
        >
          <template #activator="{ on, attrs }">
            <v-btn text dense dark v-bind="attrs" class="mt-1" v-on="on">
              Guides
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="guide in guides" :key="guide.title">
              <nuxt-link
                class=""
                :to="{
                  path: `/guides/${guide.id}`,
                }"
              >
                <v-list-item-title class="text-sm text-white hover:text-main">{{
                  guide.title
                }}</v-list-item-title>
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-divider vertical></v-divider>
        <v-btn v-if="user != null" text class="mt-1 text-white">
          Hi there {{ user.username }}</v-btn
        >
      </div>
      <!-- <v-btn v-else class="mt-1" text>Desktops</v-btn> -->
      <v-btn
        v-if="!user"
        class="mt-1 ml-auto"
        text
        @click="triggerRegistrationModal"
        >Register/Login</v-btn
      >
      <v-btn
        v-else
        class="mt-1 text-xs sm:text-sm ml-auto text-white"
        text
        @click="signout"
        >Sign out</v-btn
      >
    </div>
  </div>
</template>
<script>
import { mdiMenu } from "@mdi/js"
import { mapState } from "vuex"
import LaptopsQuery from "~/apollo/queries/laptops.gql"
import DesktopssQuery from "~/apollo/queries/desktops.gql"
import Cart from "~/components/Cart.vue"

export default {
  components: {
    Cart,
  },
  data() {
    return {
      menu: mdiMenu,
      laptops: [],
      desktops: [],
      guides: [
        { title: "Extend your PC's lifespan", id: 1 },
        { title: "Rocket League nails it", id: 2 },
        { title: "Quiet your Laptop", id: 3 },
        { title: "NEW RTX GPUs", id: 4 },
        { title: "CES Gaming Gears", id: 5 },
      ],
    }
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    triggerRegistrationModal() {
      this.$store.commit("triggerRegistrationModal")
    },
    signout() {
      this.$store.dispatch("signout")
    },
    toggleMobileWindow() {
      this.$emit("toggle-mobile")
      // this.$store.commit("toggleMobileWindow")
      // console.log(this.$store.state.mobileWindow, "toggled")
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
<style>
.emoji {
  font-size: 30px;
}
</style>
