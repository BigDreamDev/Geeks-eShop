<template>
  <div class="bg-black">
    <v-row class="p-0 m-0">
      <v-col class="p-0" cols="12" sm="6">
        <div
          class="flex flex-col justify-center min-h-[calc(100vh-70px)] h-full"
        >
          <h2
            class="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-purple-500 to-red-600 font-bold text-6xl mb-5 text-center"
          >
            Your Favorite E-Shop
          </h2>
          <p class="text-white text-xl text-center">
            Acheive more, anytime, anywhere
          </p>
          <nuxt-link :to="{ path: '/', hash: '#featured-products' }">
            <button
              class="text-white mx-auto block px-6 py-2 transition ease-in-out bg-gradient-to-br from-pink-500 via-purple-500 to-red-600 hover:-translate-y-1 hover:scale-110 duration-500 mt-5"
            >
              Featured Products
            </button>
          </nuxt-link>
        </div>
      </v-col>
      <v-col class="p-0" cols="12" sm="6">
        <v-carousel
          v-model="model"
          cycle
          :interval="4000"
          :show-arrows="false"
          :height="carouselHeight"
          hide-delimiters
        >
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <!-- <div
                  class="absolute top-32 mx-2 p-3 left-0 sm:left-6 bg-gray-900 bg-opacity-60"
                >
                  <h2 class="text-white text-5xl">Your Favorite E-Shop</h2>
                  <p class="text-white text-2xl">
                    Acheive more, anytime, anywhere
                  </p>
                  <v-btn text dense class="text-white hover:text-main"
                    >Learn more</v-btn
                  >
                </div> -->
                <img class="object-cover w-full" :src="item.url" />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <FeaturedProducts id="featured-products"></FeaturedProducts>

    <LazyHydrate when-visible>
      <Gifts />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <Deals id="deals" />
    </LazyHydrate>

    <v-lazy
      v-model="customers"
      :options="{
        threshold: 0.1,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <Customers />
    </v-lazy>

    <v-lazy
      id="guides"
      v-model="guides"
      :options="{
        threshold: 0.1,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <Guides />
    </v-lazy>
    <v-lazy
      id="guides"
      v-model="testimonials"
      :options="{
        threshold: 0.1,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <Testimonials></Testimonials>
    </v-lazy>
  </div>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration"
import FeaturedProducts from "~/components/FeaturedProducts.vue"
import Guides from "~/components/Guides.vue"
import Deals from "~/components/Deals.vue"
import Gifts from "~/components/Gifts.vue"
import Customers from "~/components/Customers.vue"
import Testimonials from "~/components/Testimonials.vue"
export default {
  components: {
    FeaturedProducts,
    Guides,
    Deals,
    LazyHydrate,
    Gifts,
    Customers,
    Testimonials,
  },
  data() {
    return {
      model: 0,
      guides: false,
      customers: false,
      testimonials: false,
      items: [
        {
          id: 1,
          url: "b1.webp",
        },
        {
          id: 2,
          url: "b2.webp",
        },
      ],
    }
  },
  computed: {
    carouselHeight() {
      if (process.client && typeof window !== "undefined") {
        return window.innerHeight - 64
      } else {
        return 650
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
