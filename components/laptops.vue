<template>
  <div>
    <h2 class="pl-8 font-bold text-4xl mt-4 underline decoration-main">
      Gaming Laptops
    </h2>
    <div v-if="laptops.data.length > 0" class="laptop-grid">
      <nuxt-link
        v-for="laptop in laptops.data"
        :key="laptop.id"
        :to="`/product-details/${laptop.id}`"
      >
        <SfProductCard
          :image="`http://localhost:1337${laptop.attributes.picture.data[0].attributes.url}`"
          image-width="100%"
          image-height="120px"
          badge-label=""
          badge-color=""
          :title="laptop.attributes.Model"
          link-tag=""
          :score-rating="4"
          :reviews-count="7"
          :max-rating="5"
          :regular-price="`${laptop.attributes.price}$`"
          special-price=""
          wishlist-icon="heart"
          is-in-wishlist-icon="heart_fill"
          :is-in-wishlist="false"
          show-add-to-cart-button
          :is-added-to-cart="false"
          :add-to-cart-disabled="false"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { SfProductCard } from '@storefront-ui/vue'
import gql from 'graphql-tag'
export default {
  components: {
    SfProductCard,
  },
  data() {
    return {
      laptops: [],
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

<style>
.laptop-grid {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.sf-product-card__image .sf-image,
.sf-product-card__picture .sf-image {
  --image-width: auto;
  --image-height: 140px;
  object-fit: contain;
}
</style>
