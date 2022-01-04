<template>
  <div class="bg-white">
    <h2 class="underline decoration-main pl-8 font-bold text-4xl py-6">
      Featured Products
    </h2>
    <v-row>
      <v-col md="6" class="relative">
        <div class="absolute top-14 left-1/4 z-10">
          <h2
            class="text-purple-700 bg-gradient-to-r from-red-400 via-pink-500 my-0 text-transparent bg-clip-text to-purple-500 px-0 font-bold text-2xl mx-auto"
          >
            ProArt Studiobook 16 OLED
          </h2>
          <p class="mb-0">Born for Creative Pros</p>
          <v-btn to="/featured/1" text dense class="p-0"
            ><span class="lowercase">Learn More</span></v-btn
          >
        </div>
        <v-img height="500" src="/f1.webp"></v-img>
      </v-col>
      <v-col md="6" class="relative">
        <div class="absolute top-14 left-1/4 z-10">
          <h2
            class="text-yellow-700 bg-gradient-to-r from-blue-400 via-orange-500 my-0 text-transparent bg-clip-text to-purple-500 px-0 font-bold text-2xl mx-auto"
          >
            Asus ExpertBook B3 Flip
          </h2>
          <p class="mb-0">Achieve more, anytime, anywhere</p>
          <v-btn text dense class="p-0 lowercase"
            ><span>Learn More</span></v-btn
          >
        </div>
        <v-img height="500" src="/f2.jpg"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
