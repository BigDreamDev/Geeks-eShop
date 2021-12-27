<template>
  <div v-if="product" class="grid grid-cols-2 mt-4 mb-8">
    <div class="px-8 col-span-2 sm:col-span-1 order-2 sm:order-1">
      <img
        :src="`http://localhost:1337${product.data.attributes.picture.data[0].attributes.url}`"
        alt=""
      />
    </div>
    <div class="col-span-2 sm:col-span-1 px-4 order-1 sm:order-2 mt-8">
      <h2 class="text-base sm:text-xl md:text-2xl lg:text-3xl">
        {{ product.data.attributes.longDescription }}
      </h2>
      <hr class="text-gray-300 mt-4" />
      <div class="mt-4">
        <span class="text-2xl"
          >Price: ${{ product.data.attributes.price }}</span
        >
        <del class="display-none text-sm"
          >${{ product.data.attributes.price + 100 }}</del
        >
        <ins class="display-none"></ins>
        <v-rating v-model="rating" large></v-rating>
      </div>
      <button
        class="snipcart-add-item mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        :data-item-id="product.data.id"
        :data-item-price="product.data.attributes.price"
        :data-item-url="`${$route.fullPath}`"
        :data-item-description="product.data.attributes.description"
        :data-item-image="`http://localhost:1337${product.data.attributes.picture.data[0].attributes.url}`"
        :data-item-name="product.data.attributes.model"
        v-bind="customFields"
      >
        Add to cart
      </button>
      <!-- <SfRating score="4"></SfRating> -->
      <hr class="text-gray-300 mt-4" />
    </div>
    <div class="sm:col-span-1 col-span-2 px-6 max-w-prose order-3">
      <h3 class="text-xl font-bold my-4 underline decoration-purple-500">
        About this item
      </h3>
      <p class="whitespace-pre-wrap">
        {{ product.data.attributes.info }}
      </p>
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
    </div>
    <!-- <pre>{{ laptop }}</pre> -->
  </div>
</template>

<script>
import laptopQuery from '~/apollo/queries/laptop'
import desktopQuery from '~/apollo/queries/desktop'
export default {
  data() {
    return {
      laptop: null,
      desktop: null,
      rating: 4,
    }
  },
  computed: {
    customFields() {
      return this.laptop.data.attributes.custom_field
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
    product() {
      const product = this.$store.state.currentTab
      if (product === 0) return this.laptop
      else if (product === 1) return this.desktop
      else return this.laptop
    },
  },
  apollo: {
    laptop: {
      prefetch: false,
      query: laptopQuery,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
    desktop: {
      prefetch: false,
      query: desktopQuery,
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
  content: '\F04CE';
  color: #a82514;
}
</style>
