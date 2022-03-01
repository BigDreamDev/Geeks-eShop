<template>
  <div class="kv__banner p-0">
    <figure class="img__kv__banner"></figure>
    <div
      class="absolute left-1/2 transform top-32 bg-black bg-opacity-40 backdrop-blur-lg p-4 -translate-x-1/2 text-white"
    >
      <h2 class="font-bold text-4xl text-center mb-4">Who we are</h2>
      <p class="mb-0 text-base max-w-prose text-center">
        E-Shop is a company specialized in the field of computer and
        electronics, since its establishment in 2022, it has worked to develop
        the concepts of buying and selling, by meeting all the needs of the
        local market in terms of electronic devices and maintenance parts, with
        high quality, reasonable prices and a real guarantee.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.kv__banner {
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 2560px;
  height: 100vh;
}
.kv__banner .img__kv__banner {
  position: absolute;
  top: 0;
  width: 100%;
  /* height: 550px; */
  height: 100vh;
  -webkit-transform: scale(1.2) translateZ(0px);
  transform: scale(1.2) translateZ(0px);
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
  -webkit-animation: kvBannerScale 10000ms forwards 1;
  animation: kvBannerScale 10000ms forwards 1;
  animation-duration: 10000ms;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: kvBannerScale;
  background-image: url("/about.webp");
  background-size: cover;
}
@keyframes kvBannerScale {
  0% {
    -webkit-transform: scale(1.2) translateZ(0px);
    transform: scale(1.2) translateZ(0px);
  }

  50% {
  }
  100% {
    -webkit-transform: scale(1) translateZ(0px);
    transform: scale(1) translateZ(0px);
  }
}
</style>
