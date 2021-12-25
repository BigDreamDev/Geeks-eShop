<template>
  <div v-if="laptops" class="flex flex-row flex-wrap justify-evenly">
    <nuxt-link
      v-for="laptop in laptops.data"
      :key="laptop.id"
      :to="`/product-details/${laptop.id}`"
    >
      <v-card
        :loading="(laptops.length = 0)"
        class="mx-auto my-12 hover:shadow-2xl"
        max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <img
          height="250"
          class="object-contain h-64 mx-auto"
          :src="`http://localhost:1337${laptop.attributes.picture.data[0].attributes.url}`"
        />

        <v-card-title>{{ laptop.attributes.Model }} </v-card-title>

        <v-divider class="mx-4"></v-divider>

        <v-card-text> {{ laptop.attributes.price }}$ </v-card-text>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Specifications</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip
              v-for="(val, spec, index) in laptop.attributes.Specifications"
              :key="index"
              ><span class="capitalize">{{ spec }}</span> : {{ val }}</v-chip
            >
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="reserve">
            More Information
          </v-btn>
        </v-card-actions>
      </v-card>
    </nuxt-link>
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
