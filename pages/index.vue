<template>
  <div>
    <v-carousel v-model="model" height="600">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <img class="object-cover w-full" :src="item.url" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <laptops></laptops>
    <div>
      <v-parallax height="600" src="/offer.webp">
        <v-row class="items-center" justify="center">
          <v-col cols="12">
            <h1 class="font-bold text-4xl">The Ultimate Holiday Gifts</h1>
            <h4 class="subheading pl-2">Limited Offer!</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <ProductCard></ProductCard>
    <Deals></Deals>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      items: [
        {
          id: 1,
          url: 'b1.jpg',
        },
        {
          id: 2,
          url: 'b2.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
