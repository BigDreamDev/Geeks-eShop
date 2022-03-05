<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="relative container px-4 mx-auto">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-10 lg:mb-16">
            <h2
              class="text-white pb-4 font-bold text-4xl decoration-red-500 underline underline-red-500 underline-offset-4 text-center"
            >
              What people say
            </h2>
          </div>
          <div class="relative flex flex-wrap -mx-5 mb-20">
            <div class="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
              <div class="flex lg:mx-0">
                <div class="w-1/3 px-4">
                  <nuxt-img
                    quality="70"
                    class="w-30 h-40 mx-auto rounded-full object-cover"
                    src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940"
                    alt=""
                  />
                </div>
                <div class="w-2/3 px-4">
                  <div
                    class="relative inline-block mb-8 p-4 md:p-10 bg-gray-500 rounded-lg"
                  >
                    <p class="mb-8 md:text-lg text-gray-200">
                      Very cool company for computer hardware I have a lot of
                      things made by them in my house.
                    </p>
                    <h3 class="mb-1 text-2xl text-white font-bold">
                      L&eacute;a Herrera
                    </h3>
                    <p class="text-white">Google</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-5">
              <div class="flex lg:mx-0">
                <div class="w-1/3 px-4">
                  <nuxt-img
                    quality="70"
                    class="w-30 h-40 mx-auto rounded-full object-cover object-top"
                    src="https://images.pexels.com/photos/5325893/pexels-photo-5325893.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940"
                    alt=""
                  />
                </div>
                <div class="w-2/3 px-4">
                  <div
                    class="relative inline-block mb-8 p-4 md:p-10 bg-gray-500 rounded-lg"
                  >
                    <p class="mb-8 md:text-lg text-gray-200">
                      Love my ROG laptop from E-Shop. Amazing quality for the
                      money I paid. Recommend this brand to all of the people
                      asking me for advice.
                    </p>

                    <h3 class="mb-1 text-2xl text-white font-bold">
                      Harry Douglas
                    </h3>
                    <p class="text-white">Asos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
