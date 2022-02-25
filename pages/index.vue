<template>
  <div class="bg-gray-100">
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
            <div class="absolute top-32 p-3 left-6 bg-gray-900 bg-opacity-60">
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
    <FeaturedProducts></FeaturedProducts>
    <div>
      <v-parallax height="600" src="/offer.webp">
        <v-row class="items-center" justify="center">
          <v-col cols="12">
            <h1 class="font-bold text-4xl">The Ultimate Holiday Gifts</h1>
            <h4 class="subheading pl-2">Limited Offer!</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <Deals />
    <Guides />
  </div>
</template>

<script>
import FeaturedProducts from "~/components/FeaturedProducts.vue"
import Guides from "~/components/Guides.vue"
import Deals from "~/components/Deals.vue"
export default {
  components: { FeaturedProducts, Guides, Deals },
  data() {
    return {
      model: 0,
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
