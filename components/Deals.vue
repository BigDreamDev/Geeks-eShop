<template>
  <div class="my-8 bg-gray-100">
    <h2 class="text-center font-bold text-black text-4xl">Deals</h2>
    <v-tabs v-model="currentTab" mobile-break-point="100" fixed-tabs>
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
        class="bg-gray-100 text-black"
        active-class="text-main"
        >{{ tab }}</v-tab
      >
    </v-tabs>
    <client-only>
      <keep-alive>
        <ProductSwiper
          v-if="key === 0 && laptops.data"
          key="laptops"
          :products="laptops.data.attributes.products.data"
        ></ProductSwiper>
        <ProductSwiper
          v-else-if="key === 1 && desktops.data"
          key="desktops"
          :products="desktops.data.attributes.products.data"
        ></ProductSwiper>
        <Spinner v-else></Spinner>
      </keep-alive>
    </client-only>
  </div>
</template>

<script>
import ProductSwiper from "./ProductSwiper.vue"
import laptopsQuery from "~/apollo/queries/laptops.gql"
import desktopsQuery from "~/apollo/queries/desktops.gql"

export default {
  components: {
    ProductSwiper,
  },
  data() {
    return {
      ProductSwiper: "ProductSwiper",
      tabs: ["Laptops", "Desktops", "Mobile", "Monitors"],
      laptops: [],
      desktops: [],
    }
  },
  computed: {
    currentTab: {
      get() {
        return this.$store.getters.currentTab
      },
      set(newValue) {
        return this.$store.commit("changeCurrentTab", newValue)
      },
    },
    key() {
      return this.$store.state.currentTab
    },
  },
  apollo: {
    laptops: {
      prefetch: true,
      query: laptopsQuery,
    },
    desktops: {
      prefetch: false,
      query: desktopsQuery,
    },
  },
}
</script>

<style scoped></style>
