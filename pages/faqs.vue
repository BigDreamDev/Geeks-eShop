<template>
  <div class="min-h-max py-12 bg-zinc-700">
    <h1
      class="text-white pb-4 font-bold text-4xl decoration-red-500 underline underline-red-500 underline-offset-4 text-center"
    >
      FAQs
    </h1>
    <v-expansion-panels dark class="h-full" popout>
      <v-expansion-panel v-for="(faq, i) in faqs" :key="i">
        <v-expansion-panel-header
          class="text-base md:text-xl"
          :expand-icon="expandIcon"
          >{{ faq.title }}</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          {{ faq.details }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mdiChevronDown } from "@mdi/js"
export default {
  data() {
    return {
      expandIcon: mdiChevronDown,
      faqs: [
        {
          title: "2-in-1s vs. traditional laptops?",
          details:
            "When it comes to a laptop’s form factor, you will need to choose between traditional “clamshell” laptops and versatile 2-in-1 laptops. These 2-in-1s combine a powerful laptop and a go-anywhere tablet in one lightweight, portable device (and may also be called “convertible” or “hybrid” laptops).",
        },
        {
          title: "Pick a platform: Windows 10 vs. Mac vs. Chrome OS?",
          details: `This is not an easy question to answer, especially if you're not familiar with both Macs and PCs. But this quick overview of each platform’s strengths and weaknesses should help.
          Most laptops come with one of three operating systems: Windows, Chrome OS or MacOS (for MacBooks only). Choosing the right one is a personal preference, but here's a quick summary of what each offers.`,
        },
        {
          title: "What Shipping Methods Are Available?",
          details: `We ship throughout South Africa using Postnet Couriers. We have a good relationship with them and have found their services to be reliable.
          For Cape Town orders, we hand deliver or have a collection point in Brakenfell.`,
        },
        {
          title: "Are your laptops good quality?",
          details: `We sell only the best and most well known brands. All our laptops, components and accessories are original products and we do not stock any knock-offs or fakes.
          We post as much information as possible about each product and if you would like to know more you are welcome to contact us and we will give you all the info you need. Each laptop is tested before leaving our warehouse to ensure that our customers receive the quality they are paying for.`,
        },
        {
          title: "Do I get a warranty?",
          details: `Yes! All our products carry a 3month to 2 Year warranty, depending on the product but it is specified on each product page. Should you receive defective equipment from the warehouse we will gladly repair it or replace it at our cost depending on the nature of the fault. We however do not cover any damage caused by the customer.`,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
