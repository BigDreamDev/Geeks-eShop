<template>
  <div class="my-8 bg-gray-100">
    <h2 class="text-center font-bold text-black text-4xl">Deals</h2>
    <v-tabs v-model="currentTab" mobile-break-point="100" fixed-tabs>
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
        class="bg-gray-100 text-black"
        active-class="text-main"
        >{{ tab }}</v-tab
      >
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['Laptops', 'Desktops', 'Mobile', 'Monitors'],
    }
  },
  computed: {
    currentTab: {
      get() {
        return this.$store.getters.currentTab
      },
      set(newValue) {
        return this.$store.commit('changeCurrentTab', newValue)
      },
    },
  },
}
</script>

<style scoped></style>
