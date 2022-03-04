<template>
  <div
    v-if="guide.data"
    class="bg-black px-4 flex flex-col items-center text-white min-h-screen"
  >
    <h1 class="text-4xl py-20 font-bold font-mono">
      {{ guide.data.attributes.headline }}
    </h1>
    <p class="whitespace-pre-wrap" v-html="guide.data.attributes.p1"></p>
    <nuxt-img
      provider="cloudinary"
      class="py-11 w-full"
      height="600"
      width="100vw"
      fit="cover"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
      :src="
        imgAddressClipper(guide.data.attributes.pics.data[1].attributes.url)
      "
      alt=""
    />
    <p class="whitespace-pre-wrap" v-html="guide.data.attributes.p2"></p>
    <nuxt-img
      height="600"
      width="100vw"
      fit="cover"
      provider="cloudinary"
      class="py-11 w-full"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
      :src="
        imgAddressClipper(guide.data.attributes.pics.data[0].attributes.url)
      "
      alt=""
    />
  </div>
  <Spinner v-else />
</template>

<script>
import Spinner from "~/components/Spinner.vue"
import guidesQuery from "~/apollo/queries/getGuide"
import imgAddressClipper from "~/utils/cloudinaryAddressClipper"

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
  methods: {
    imgAddressClipper,
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
