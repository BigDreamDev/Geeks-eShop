<template>
  <div>
    <h2 class="pl-8 font-bold text-4xl my-6 underline decoration-main">
      Gaming Laptops
    </h2>
    <div v-if="laptops.data" class="flex flex-row flex-wrap justify-evenly">
      <nuxt-link
        v-for="laptop in laptops.data.attributes.products.data"
        :key="laptop.id"
        :to="{
          path: `/product-details/${laptop.id}`,
          query: { type: `${laptop.attributes.type}` },
        }"
        class="mb-8"
      >
        <v-card class="w-80 h-full p-3 mb-8">
          <img
            class="h-64 object-contain mx-auto"
            :src="`http://localhost:1337${laptop.attributes.picture.data[0].attributes.url}`"
            alt=""
          />
          <v-card-title>{{ laptop.attributes.model }}</v-card-title>
          <p class="pl-3">Price: {{ laptop.attributes.price }}$</p>
          <div class="flex flex-row pl-3">
            <span>Rating:</span>
            <v-rating
              :value="rating"
              background-color="white"
              color="yellow accent-4"
              dense
              readonly
              half-increments
              hover
              size="18"
            ></v-rating>
          </div>
        </v-card>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import laptopsQuery from "~/apollo/queries/laptops"
export default {
  data() {
    return {
      laptops: [],
      rating: 4,
    }
  },
  apollo: {
    laptops: {
      prefetch: true,
      query: laptopsQuery,
    },
  },
}
</script>
