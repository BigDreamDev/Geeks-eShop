<template>
  <div v-if="laptop.length != 0" class="grid grid-cols-2 mt-4 mb-8">
    <div class="p-8 col-span-2 sm:col-span-1 order-2 sm:order-1">
      <img
        :src="`http://localhost:1337${laptop.data.attributes.picture.data[0].attributes.url}`"
        alt=""
      />
    </div>
    <div class="col-span-2 sm:col-span-1 px-4 order-1 sm:order-2 mt-8">
      <h2 class="text-base sm:text-xl md:text-2xl lg:text-3xl">
        {{ laptop.data.attributes.longDescription }}
      </h2>
      <hr class="text-gray-300 mt-4" />
      <div class="sf-price mt-4">
        <span class="sf-price__regular"
          >Price: ${{ laptop.data.attributes.price }}</span
        >
        <del class="sf-price__old display-none"
          >${{ laptop.data.attributes.price + 100 }}</del
        >
        <ins class="sf-price__special display-none"></ins>
      </div>
      <!-- <SfRating score="4"></SfRating> -->
      <hr class="text-gray-300 mt-4" />
    </div>
    <div class="sm:col-span-1 col-span-2 px-6 max-w-prose order-3">
      <h3 class="text-xl font-bold my-4 underline decoration-purple-500">
        About this item
      </h3>
      <p class="whitespace-pre-wrap">{{ laptop.data.attributes.info }}</p>
    </div>
    <div class="order-4 px-6 sm:col-span-1 my-4 col-span-2">
      <h2 class="text-xl underline decoration-red-500 font-bold mb-4">Specs</h2>
      <p
        v-for="(val, spec, index) in laptop.data.attributes.Specifications"
        :key="index"
      >
        <span class="capitalize font-bold">{{ spec }}</span
        >: {{ val }}
      </p>
    </div>
    <!-- <pre>{{ laptop }}</pre> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      laptop: [],
    }
  },
  apollo: {
    laptop: {
      query: gql`
        query getLaptop($id: ID!) {
          laptop(id: $id) {
            data {
              id
              attributes {
                Model
                inStock
                price
                Specifications
                longDescription
                description
                info
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
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
  },
}
</script>

<style scoped></style>
