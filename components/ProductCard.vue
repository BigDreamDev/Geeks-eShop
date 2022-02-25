<template>
  <div v-if="product" class="flex flex-row flex-wrap justify-evenly">
    <transition tag="div" name="fade">
      <v-card
        transition="fade-transition"
        class="mx-4 my-12 hover:shadow-2xl"
        max-width="374"
      >
        <img
          height="250"
          class="object-contain h-64 mx-auto"
          :src="product.attributes.picture.data[0].attributes.url"
        />

        <v-card-title>{{ product.attributes.model }} </v-card-title>

        <v-divider class="mx-4"></v-divider>

        <v-card-text> {{ product.attributes.price }}$ </v-card-text>

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

        <v-card-text class="p-4">
          <v-chip-group active-class="red-500" column class="pr-4">
            <v-chip
              v-for="(val, spec, index) in product.attributes.specifications"
              :key="index"
              ><span class="capitalize">{{ spec }}</span> : {{ val }}</v-chip
            >
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn
            class="bg-main white--text ml-2"
            text
            :to="{
              path: `/product-details/${product.id}`,
              query: { type: `${product.attributes.type}` },
            }"
          >
            More Information
          </v-btn>
        </v-card-actions>
      </v-card>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rating: 4,
    }
  },
  computed: {
    url() {
      return process.env.NUXT_PUBLIC_API_URL
    },
  },
}
</script>
