<template>
  <div
    v-if="guide.data"
    class="bg-black px-4 min-h-screen text-white min-h-screen"
  >
    <h1 class="text-4xl py-20 font-bold font-mono">
      {{ guide.data.attributes.headline }}
    </h1>
    <p class="whitespace-pre-wrap" v-html="guide.data.attributes.p1"></p>
    <img
      class="py-11"
      height="400"
      :src="guide.data.attributes.pics.data[1].attributes.url"
      alt=""
    />
    <p class="whitespace-pre-wrap" v-html="guide.data.attributes.p2"></p>
    <img
      height="400"
      class="py-11"
      :src="guide.data.attributes.pics.data[0].attributes.url"
      alt=""
    />
  </div>
  <Spinner v-else />
</template>

<script>
import Spinner from "~/components/Spinner.vue"
import guidesQuery from "~/apollo/queries/getGuide"

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      guide: {},
    }
  },
  computed: {
    url() {
      return process.env.NUXT_PUBLIC_API_URL
    },
  },
  apollo: {
    guide: {
      query: guidesQuery,
      variables() {
        return {
          id: this.$route.params.id,
          // id: 1,
        }
      },
    },
    // variables: {
    // id: this.$route.params.id,
    // },
  },
}
</script>

<style scoped></style>
