<template>
  <div
    style="background-color: rgba(16, 16, 16, var(--tw-bg-opacity)) !important"
  >
    <h2
      class="underline text-white decoration-main pl-8 font-bold text-4xl py-6"
    >
      Featured Products
    </h2>
    <v-row>
      <v-col md="6" class="relative">
        <div
          class="absolute top-10 sm:top-14 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-1/4 z-10"
        >
          <h2
            class="text-purple-700 bg-gradient-to-r from-red-400 via-pink-500 my-0 text-transparent bg-clip-text to-purple-500 px-0 font-bold text-2xl mx-auto"
          >
            ProArt Studiobook 16 OLED
          </h2>
          <p class="mb-0 text-white">Born for Creative Pros</p>
          <v-btn to="/featured/1" text dense class="py-0 px-4 -ml-4 text-white"
            ><span class="lowercase">Learn More</span></v-btn
          >
        </div>
        <v-img height="500" src="/f1.png"></v-img>
      </v-col>
      <v-col md="6" class="relative">
        <div
          class="absolute top-10 sm:top-14 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-1/4 z-10"
        >
          <h2
            class="text-yellow-700 bg-gradient-to-r from-blue-400 via-orange-500 my-0 text-transparent bg-clip-text to-purple-500 px-0 font-bold text-2xl mx-auto"
          >
            Asus ExpertBook B3 Flip
          </h2>
          <p class="mb-0 text-white">Achieve more, anytime, anywhere</p>
          <v-btn text dense class="py-0 px-4 -ml-4 lowercase"
            ><span class="text-white">Learn More</span></v-btn
          >
        </div>
        <v-img height="500" src="/f2.png"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
