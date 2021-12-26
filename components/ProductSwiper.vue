<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="laptop in laptops.data"
      :key="laptop.id"
      class="d-flex justify-center"
    >
      <product-card :laptop="laptop"></product-card>
    </swiper-slide>

    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
import gql from 'graphql-tag'

import { Swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      laptops: [],
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
