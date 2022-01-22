<template>
  <div class="flex ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji mr-4"> 💻 </span>
    </nuxt-link>
    <button class="snipcart-checkout inline-flex items-center">
      <Cart />
      <span class="snipcart-total-price ml-3 font-semibold text-sm"></span>
    </button>
    <!-- <v-menu v-for="(item, index) in items" :key="index" open-on-hover offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          text
          dense
          dark
          v-bind="attrs"
          class="mt-1 text-main ml-4"
          v-on="on"
        >
          {{ item.category }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="laptop in item.data.data" :key="laptop">
          <nuxt-link
            class="text-main"
            :to="{
              path: `/product-details/${laptop.id}`,
              query: { type: laptop.attributes.type },
            }"
          >
            <v-list-item-title class="text-base">{{
              laptop.attributes.model
            }}</v-list-item-title>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>  -->
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
    <v-btn
      class="mt-1 ml-auto text-black"
      text
      @click="triggerRegistrationModal"
      >Register/Login</v-btn
    >
  </div>
</template>
<script>
import LaptopsQuery from "~/apollo/queries/laptops.gql"
import DesktopssQuery from "~/apollo/queries/desktops.gql"
export default {
  data() {
    return {
      laptops: [],
      desktops: [],
      items: [
        {
          category: "Laptops",
          // data: [...this.laptops],
        },
        {
          category: "Desktops",
          // data: this.desktops.data,
        },
        {
          category: "Mobile",
          // data: this.desktops || [],
        },
      ],
    }
  },
  methods: {
    triggerRegistrationModal() {
      this.$store.commit("triggerRegistrationModal")
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
