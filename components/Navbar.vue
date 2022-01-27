<template>
  <div class="flex ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji mr-4"> 💻 </span>
    </nuxt-link>
    <button class="snipcart-checkout inline-flex items-center">
      <Cart />
      <span class="snipcart-total-price ml-3 font-semibold text-sm"></span>
    </button>
    <v-menu open-on-hover offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          text
          dense
          dark
          v-bind="attrs"
          class="mt-1 ml-4 text-black"
          v-on="on"
        >
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
            <v-list-item-title class="text-sm text-black hover:text-main">{{
              laptop.attributes.model
            }}</v-list-item-title>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu open-on-hover offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          text
          dense
          dark
          v-bind="attrs"
          class="mt-1 ml-3 text-black"
          v-on="on"
        >
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
            <v-list-item-title class="text-sm text-black hover:text-main">{{
              desktop.attributes.model
            }}</v-list-item-title>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-if="user != null" text class="mt-1 ml-auto text-black">
      Hi there {{ user.username }}</v-btn
    >
    <v-btn
      v-if="!user"
      class="mt-1 ml-auto text-black"
      text
      @click="triggerRegistrationModal"
      >Register/Login</v-btn
    >
    <v-btn v-else class="mt-1 ml-auto text-black" text @click="signout"
      >Sign out</v-btn
    >
  </div>
</template>
<script>
import { mapState } from "vuex"
import LaptopsQuery from "~/apollo/queries/laptops.gql"
import DesktopssQuery from "~/apollo/queries/desktops.gql"

export default {
  data() {
    return {
      laptops: [],
      desktops: [],
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
