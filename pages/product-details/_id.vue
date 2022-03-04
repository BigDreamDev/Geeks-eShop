<template>
  <div>
    <div
      v-if="product"
      class="grid grid-cols-2 pt-4 text-white pb-8 min-h-screen"
    >
      <div class="px-8 col-span-2 sm:col-span-1 order-2 sm:order-1">
        <nuxt-img
          provider="cloudinary"
          :src="
            imgAddressClipper(
              product.data.attributes.picture.data[0].attributes.url
            )
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
          <v-rating
            v-model="rating"
            :empty-icon="off"
            :full-icon="star"
            :half-icon="half"
            large
          ></v-rating>
          <button
            class="snipcart-add-item mt-4 bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-white rounded shadow"
            :data-item-id="product.data.id"
            :data-item-price="product.data.attributes.price"
            :data-item-url="`${$route.fullPath}`"
            :data-item-description="product.data.attributes.longDescription"
            :data-item-image="
              product.data.attributes.picture.data[0].attributes.url
            "
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
          <v-rating
            v-model="rating"
            :empty-icon="off"
            :full-icon="star"
            :half-icon="half"
            large
          ></v-rating>
          <button
            class="snipcart-add-item mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            :data-item-id="product.data.id"
            :data-item-price="product.data.attributes.price"
            :data-item-url="`${$route.fullPath}`"
            :data-item-description="product.data.attributes.longDescription"
            :data-item-image="
              product.data.attributes.picture.data[0].attributes.url
            "
            :data-item-name="product.data.attributes.model"
            v-bind="customFields"
          >
            Add to cart
          </button>
        </div>
        <hr class="text-gray-300 mt-4" />
      </div>
      <div class="sm:col-span-1 col-span-2 px-6 max-w-prose order-3">
        <h3 class="text-xl font-bold my-4 underline decoration-red-500">
          About this item
        </h3>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p
          class="whitespace-pre-wrap"
          v-html="product.data.attributes.info"
        ></p>
      </div>
      <div class="order-4 px-6 sm:col-span-1 my-4 col-span-2">
        <h2 class="text-xl underline decoration-red-500 font-bold mb-4">
          Specs
        </h2>
        <p
          v-for="(val, spec, index) in product.data.attributes.specifications"
          :key="index"
        >
          <span class="capitalize font-bold">{{ spec }}</span
          >: {{ val }}
        </p>
        <v-divider></v-divider>
        <div>
          <h2 class="text-xl underline decoration-red-500 font-bold mt-4 mb-3">
            Reviews
          </h2>
          <v-alert
            v-if="error"
            border="right"
            colored-border
            type="error"
            elevation="2"
          >
            Something went wrong!.
          </v-alert>
          <Spinner v-if="$apollo.queries.reviews.loading"></Spinner>
          <div v-else>
            <div v-for="(rev, i) in reviews.data" :key="i" class="relative">
              <div v-if="reviews.data && reviews.data.length">
                <v-btn
                  v-if="isRegistered && isCommentOwner(rev)"
                  text
                  class="absolute right-0 top-2"
                  @click="deleteReview(rev.id)"
                >
                  <v-icon class="text-red-500">{{ closeIcon }}</v-icon>
                </v-btn>
                <p class="font-bold pt-3">
                  {{ rev.attributes.user.data.attributes.username }}
                </p>
                <span class="capitalize">"{{ rev.attributes.content }}"</span>
                <v-rating
                  :value="calcRating(rev.attributes.rating)"
                  small
                  readonly
                ></v-rating>
                <v-divider></v-divider>
              </div>
              <p v-else class="pt-2">No Reviews have been submited Yet</p>
            </div>
          </div>
          <div>
            <h2
              class="text-xl mt-4 underline decoration-red-700 font-bold mb-4"
            >
              Add a review
            </h2>
            <v-textarea
              v-model="review"
              dark
              outlined
              name="input-7-4"
              label="Add a Review"
            ></v-textarea>
            <span>Pick your rating</span
            ><v-rating
              v-model="rating"
              :empty-icon="off"
              :full-icon="star"
              :half-icon="half"
            ></v-rating>
            <v-btn
              :disabled="!isRegistered"
              class="bg-main mt-3 text-white"
              @click="addReview"
              >Submit</v-btn
            >
          </div>
        </div>
      </div>
    </div>
    <Spinner v-else></Spinner>
  </div>
</template>

<script>
import { mdiStar, mdiStarHalf, mdiStarOff, mdiClose } from "@mdi/js"

import laptopQuery from "~/apollo/queries/laptop"
import reviewsQuery from "~/apollo/queries/getReviews"
import deleteReview from "~/apollo/mutations/deleteReview"
import { CreateReview } from "~/apollo/constants/graphql"
import Spinner from "~/components/Spinner.vue"
import imgAddressClipper from "~/utils/cloudinaryAddressClipper"

export default {
  components: { Spinner },
  data() {
    return {
      product: null,
      laptop: null,
      desktop: null,
      reviews: [],
      rating: 4,
      review: "",
      error: false,
      star: mdiStar,
      half: mdiStarHalf,
      off: mdiStarOff,
      closeIcon: mdiClose,
    }
  },
  computed: {
    url() {
      return process.env.NUXT_PUBLIC_API_URL
    },
    customFields() {
      return this.product.data.attributes.custom_field
        .map(({ model, required, options }) => ({
          name: model,
          required,
          options,
        }))
        .map((x, index) =>
          Object.entries(x).map(([key, value]) => ({
            [`data-item-custom${index + 1}-${key?.toString().toLowerCase()}`]:
              value,
          }))
        )
        .reduce((acc, curr) => acc.concat(curr), [])
        .reduce((acc, curr) => ({ ...acc, ...curr }))
    },
    type() {
      return this.$route.query.type
    },
    userID() {
      return this.$store.state.user?.id
    },
    isRegistered() {
      return this.$store.state.isLoggedIn
    },
  },
  methods: {
    isCommentOwner(rev) {
      return rev?.attributes?.user?.data?.id === this.userID
    },
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
    async addReview() {
      const review = this.review
      const token = this.$store.state.jwt
      const rating = this.convertRating(this.rating)
      const id = this.$route.params.id
      const userID = this.$store.state.user.id
      try {
        await this.$apollo.mutate({
          mutation: CreateReview,
          variables: {
            reviewContent: review,
            rating,
            id,
            userID,
          },
          context: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        })

        this.$apollo.queries.reviews.refetch()
        this.review = ""
      } catch (error) {
        this.$store.dispatch("showNotification", "Something went wrong!")
        console.log(error)
      }
    },
    async deleteReview(id) {
      await this.$apollo.mutate({
        mutation: deleteReview,
        variables: {
          id,
        },
        error() {
          this.error = true
        },
      })
      this.$apollo.queries.reviews.refetch()
    },
    imgAddressClipper,
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
    reviews: {
      prefetch: false,
      query: reviewsQuery,
      variables() {
        return {
          laptopID: {
            id: {
              eq: this.$route.params.id,
            },
          },
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
