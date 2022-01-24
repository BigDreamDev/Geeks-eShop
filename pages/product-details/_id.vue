<template>
  <div v-if="product" class="grid grid-cols-2 mt-4 mb-8">
    <div class="px-8 col-span-2 sm:col-span-1 order-2 sm:order-1">
      <img
        :src="
          'http://localhost:1337' +
          product.data.attributes.picture.data[0].attributes.url
        "
        alt=""
      />
      <div class="mt-4 sm:hidden">
        <span class="text-2xl"
          >Price: ${{ product.data.attributes.price }}</span
        >
        <del class="display-none text-sm"
          >${{ product.data.attributes.price + 100 }}</del
        >
        <ins class="display-none"></ins>
        <v-rating v-model="rating" large></v-rating>
        <button
          class="snipcart-add-item mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          :data-item-id="product.data.id"
          :data-item-price="product.data.attributes.price"
          :data-item-url="`${$route.fullPath}`"
          :data-item-description="product.data.attributes.longDescription"
          :data-item-image="`http://localhost:1337${product.data.attributes.picture.data[0].attributes.url}`"
          :data-item-name="product.data.attributes.model"
          v-bind="customFields"
        >
          Add to cart
        </button>
        <hr class="text-gray-300 mt-4" />
      </div>
    </div>
    <div class="col-span-2 sm:col-span-1 px-4 order-1 sm:order-2 mt-8">
      <h2 class="text-base sm:text-xl md:text-2xl lg:text-3xl">
        {{ product.data.attributes.longDescription }}
      </h2>
      <div class="mt-4 hidden sm:block">
        <hr class="text-gray-300 my-4" />
        <span class="text-2xl pt-2"
          >Price: ${{ product.data.attributes.price }}</span
        >
        <del class="display-none text-sm"
          >${{ product.data.attributes.price + 100 }}</del
        >
        <ins class="display-none"></ins>
        <v-rating v-model="rating" large></v-rating>
        <button
          class="snipcart-add-item mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          :data-item-id="product.data.id"
          :data-item-price="product.data.attributes.price"
          :data-item-url="`${$route.fullPath}`"
          :data-item-description="product.data.attributes.longDescription"
          :data-item-image="`http://localhost:1337${product.data.attributes.picture.data[0].attributes.url}`"
          :data-item-name="product.data.attributes.model"
          v-bind="customFields"
        >
          Add to cart
        </button>
      </div>
      <hr class="text-gray-300 mt-4" />
    </div>
    <div class="sm:col-span-1 col-span-2 px-6 max-w-prose order-3">
      <h3 class="text-xl font-bold my-4 underline decoration-purple-500">
        About this item
      </h3>
      <p class="whitespace-pre-wrap" v-html="product.data.attributes.info"></p>
    </div>
    <div class="order-4 px-6 sm:col-span-1 my-4 col-span-2">
      <h2 class="text-xl underline decoration-red-500 font-bold mb-4">Specs</h2>
      <p
        v-for="(val, spec, index) in product.data.attributes.specifications"
        :key="index"
      >
        <span class="capitalize font-bold">{{ spec }}</span
        >: {{ val }}
      </p>
      <v-divider></v-divider>
      <div>
        <div v-if="product.data.attributes.reviews.data.length > 0">
          <h2 class="text-xl underline decoration-blue-500 font-bold mb-4">
            Reviews
          </h2>
          <p
            v-for="(review, i) in product.data.attributes.reviews.data"
            :key="i"
          >
            <span class="capitalize font-bold">{{
              review.attributes.content
            }}</span>
            <v-rating
              :value="calcRating(review.attributes.rating)"
              small
              readonly
            ></v-rating>
            <v-divider></v-divider>
          </p>
        </div>
        <div>
          <h2 class="text-xl mt-4 underline decoration-red-700 font-bold mb-4">
            Add a review
          </h2>
          <v-textarea
            v-model="review"
            outlined
            name="input-7-4"
            label="Add a Review"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
          <span>Pick your rating</span><v-rating v-model="rating"></v-rating>
          <v-btn class="bg-main mt-3 text-white" @click="addReview"
            >Submit</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import laptopQuery from "~/apollo/queries/laptop"
import { CreateReview } from "~/apollo/constants/graphql"
export default {
  data() {
    return {
      product: null,
      laptop: null,
      desktop: null,
      reviews: null,
      rating: 4,
      review: "",
    }
  },
  computed: {
    customFields() {
      return this.product.data.attributes.custom_field
        .map(({ model, required, options }) => ({
          name: model,
          required,
          options,
        }))
        .map((x, index) =>
          Object.entries(x).map(([key, value]) => ({
            [`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]:
              value,
          }))
        )
        .reduce((acc, curr) => acc.concat(curr), [])
        .reduce((acc, curr) => ({ ...acc, ...curr }))
    },
    type() {
      return this.$route.query.type
    },
  },
  methods: {
    calcRating(rating) {
      switch (rating) {
        case "one":
          return 1
        case "two":
          return 2
        case "three":
          return 4
        case "four":
          return 4
        case "five":
          return 5
      }
    },
    convertRating(rating) {
      switch (rating) {
        case 1:
          return "one"
        case 2:
          return "two"
        case 3:
          return "three"
        case 4:
          return "four"
        case 5:
          return "five"
      }
    },
    addReview() {
      const review = this.review
      const token = this.$store.state.jwt
      console.log(token)
      const rating = this.convertRating(this.rating)
      const id = this.$route.params.id
      this.$apollo.mutate({
        mutation: CreateReview,
        variables: {
          reviewContent: review,
          rating,
          id,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`, // ⭕ Fetch without header
          },
        },
      })
    },
  },
  apollo: {
    product: {
      prefetch: true,
      query: laptopQuery,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
  },
}
</script>

<style scoped>
.mdi-star::before {
  content: "\F04CE";
  color: #a82514;
}
</style>
