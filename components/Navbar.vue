<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji mr-4"> 💻 </span>
    </nuxt-link>
    <button class="snipcart-checkout flex items-center">
      <Cart />
      <span
        class="snipcart-total-price ml-3 font-semibold text-sm text-main"
      ></span>
    </button>
  </div>
</template>
<script>
export default {}
</script>
<style>
.emoji {
  font-size: 30px;
}
</style>
