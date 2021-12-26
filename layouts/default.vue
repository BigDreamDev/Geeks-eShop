<template>
  <v-app>
    <v-app-bar>
      <!-- <v-btn text color="black" class="hover:cursor-pointer">Laptops</v-btn> -->
      <Navbar></Navbar>
    </v-app-bar>
    <v-main>
      <nuxt />
      <div id="snipcart" hidden :data-api-key="snipcartKey"></div>
    </v-main>
    <v-footer> This is a footer </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      snipcartKey: process.env.SNIPCART,
    }
  },
}
</script>

<style scoped></style>
