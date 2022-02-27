<template>
  <div class="bg-black">
    <v-carousel
      v-model="model"
      cycle
      :interval="4000"
      :show-arrows="false"
      :height="carouselHeight"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div
              class="absolute top-32 mx-2 p-3 left-0 sm:left-6 bg-gray-900 bg-opacity-60"
            >
              <h2 class="text-white text-5xl">Your Favorite E-Shop</h2>
              <p class="text-white text-2xl">Acheive more, anytime, anywhere</p>
              <v-btn text dense class="text-white hover:text-main"
                >Learn more</v-btn
              >
            </div>
            <img class="object-cover w-full" :src="item.url" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- <laptops></laptops> -->
    <FeaturedProducts id="featured-products"></FeaturedProducts>
    <LazyHydrate when-visible>
      <Gifts />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <Deals id="deals" />
    </LazyHydrate>

    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.2,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <Guides id="guides" />
    </v-lazy>
  </div>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration"
import FeaturedProducts from "~/components/FeaturedProducts.vue"
import Guides from "~/components/Guides.vue"
import Deals from "~/components/Deals.vue"
import Gifts from "~/components/Gifts.vue"
export default {
  components: { FeaturedProducts, Guides, Deals, LazyHydrate, Gifts },
  data() {
    return {
      model: 0,
      isActive: false,
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
