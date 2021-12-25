<template>
  <div>
    <h2 class="pl-8 font-bold text-4xl my-6 underline decoration-main">
      Gaming Laptops
    </h2>
    <div
      v-if="laptops.data.length > 0"
      class="flex flex-row flex-wrap justify-evenly"
    >
      <nuxt-link
        v-for="laptop in laptops.data"
        :key="laptop.id"
        :to="`/product-details/${laptop.id}`"
      >
        <v-card class="w-80 p-3">
          <img
            class="h-64 object-contain"
            :src="`http://localhost:1337${laptop.attributes.picture.data[0].attributes.url}`"
            alt=""
          />
          <v-card-title>{{ laptop.attributes.Model }}</v-card-title>
          <p class="pl-3">Price: {{ laptop.attributes.price }}$</p>
          <div class="flex flex-row pl-3">
            <span>Rating:</span>
            <v-rating
              v-model="rating"
              background-color="white"
              color="yellow accent-4"
              dense
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
import gql from 'graphql-tag'
export default {
  data() {
    return {
      laptops: [],
      rating: 4,
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
                Model
                Date
                description
                inStock
                price
                Specifications
                picture {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    },
  },
}
</script>
