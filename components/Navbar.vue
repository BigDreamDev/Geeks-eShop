<template>
  <div class="flex ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji mr-4"> 💻 </span>
    </nuxt-link>
    <button class="snipcart-checkout inline-flex items-center">
      <Cart />
      <span
        class="snipcart-total-price ml-3 font-semibold text-sm text-main"
      ></span>
    </button>
    <v-menu open-on-hover offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          text
          dense
          dark
          v-bind="attrs"
          class="mt-1 text-main ml-4"
          v-on="on"
        >
          Laptops
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="laptop in laptops.data" :key="laptop.id">
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
    </v-menu>
    <v-menu open-on-hover offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          text
          dense
          dark
          v-bind="attrs"
          class="mt-1 text-main ml-3"
          v-on="on"
        >
          Desktops
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="desktop in desktops.data" :key="desktop.id">
          <nuxt-link
            class="text-main"
            :to="{
              path: `/product-details/${desktop.id}`,
              query: { type: desktop.attributes.type },
            }"
          >
            <v-list-item-title class="text-base">{{
              desktop.attributes.model
            }}</v-list-item-title>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
import { gql } from 'graphql-tag'

export default {
  data() {
    return {
      laptops: [],
      desktops: [],
    }
  },
  apollo: {
    laptops: {
      query: gql`
        query {
          laptops {
            data {
              id
              attributes {
                model
                type
              }
            }
          }
        }
      `,
    },
    desktops: {
      query: gql`
        query {
          desktops {
            data {
              id
              attributes {
                model
                type
              }
            }
          }
        }
      `,
    },
  },
}
</script>
<style>
.emoji {
  font-size: 30px;
}
</style>
