<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="product in currentProduct.data"
      :key="product.id"
      class="d-flex justify-center"
    >
      <product-card :product="product"></product-card>
    </swiper-slide>

    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import laptopsQuery from '~/apollo/queries/laptops'
import desktopsQuery from '~/apollo/queries/desktops'
export default {
  components: {
    Swiper,
  },
  data() {
    return {
      laptops: [],
      desktops: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1048: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          280: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        },
      },
    }
  },
  computed: {
    currentProduct() {
      const product = this.$store.getters.currentTab
      if (product === 0) return this.laptops
      else if (product === 1) return this.desktops
      else {
        return this.laptops
      }
    },
  },
  apollo: {
    laptops: {
      prefetch: true,
      query: laptopsQuery,
    },
    desktops: {
      prefetch: false,
      query: desktopsQuery,
    },
  },
}
</script>

<style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  height: 28px;
  width: 28px;
}

.swiper-button-next,
.swiper-button-prev {
  color: #7c1d25;
  background: #c4c4c4 !important;
  border-radius: 50%;
  padding: 25px;
}
.indent-right {
  right: 0;
}
.indent-left {
  left: 0;
}
</style>
