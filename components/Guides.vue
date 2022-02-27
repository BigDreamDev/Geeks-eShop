<template functional>
  <div>
    <h2 class="text-center font-bold text-white text-4xl pb-14">Guides</h2>
    <div
      class="grid grid-cols-4 gap-1 auto-rows-[300px] lg:grid-rows-[200px_minmax(200px,_1fr)_100px]"
    >
      <div
        sm="6"
        class="lg:col-span-2 col-span-4 row-span-1 lg:row-span-2 relative p-0 overflow-hidden"
      >
        <nuxt-link to="/guides/1">
          <div
            class="w-full h-full hover:transform hover:scale-110 bg-[url('/guides/pc.webp')] guides-bg"
          ></div>
          <div
            class="mt-auto absolute bottom-0 left-0 py-3 px-4 w-full bg-gray-900 z-10 text-white bg-opacity-70"
          >
            <h2 class="font-bold text-lg">
              How to make your PC stand the test of time
            </h2>
            <p class="mb-0 text-base">
              A few tips and tricks to keep your system running smoothly for
              years to come.
            </p>
          </div>
        </nuxt-link>
      </div>
      <div
        class="relative col-span-4 sm:col-span-2 lg:col-span-1 row-span-1 p-0 overflow-hidden"
        sm="3"
      >
        <nuxt-link to="/guides/3">
          <div
            class="w-full h-full hover:transform hover:scale-110 bg-[url('/guides/fan.webp')] guides-bg"
          ></div>
          <div
            class="mt-auto absolute bottom-0 left-0 py-3 px-4 max-h-[50%] w-full bg-gray-900 z-10 text-white bg-opacity-70"
          >
            <h2
              class="font-bold text-lg truncate overflow-hidden text-ellipsis"
            >
              How to quiet a noisy laptop fan
            </h2>
            <p class="mb-0 text-base truncate overflow-hidden text-ellipsis">
              It's time you enjoyed the sound of silence again
            </p>
          </div>
        </nuxt-link>
      </div>
      <div
        class="relative col-span-4 sm:col-span-2 lg:col-span-1 row-span-1 p-0 overflow-hidden"
        sm="3"
      >
        <nuxt-link to="/guides/4">
          <div
            class="w-full h-full hover:transform hover:scale-110 bg-[url('/guides/gpu.webp')] guides-bg"
          ></div>
          <div
            class="mt-auto absolute bottom-0 left-0 py-3 px-4 max-h-[50%] w-full bg-gray-900 z-10 text-white bg-opacity-70"
          >
            <h2
              class="font-bold text-base truncate overflow-hidden text-ellipsis"
            >
              NEW ROG STRIX AND TUF GAMING GEFORCE RTX 3080 GPUS GET AN EXTRA
              HELPING OF VRAM
            </h2>
            <p class="mb-0 text-base truncate overflow-hidden text-ellipsis">
              The new ROG Strix GeForce RTX 3080 12GB and TUF Gaming GeForce RTX
              3080 12GB GPUs debut with an additional 2GB more VRAM than their
              predecessors.
            </p>
          </div>
        </nuxt-link>
      </div>
      <div
        class="relative col-span-4 sm:col-span-2 lg:col-span-1 row-span-1 p-0 overflow-hidden"
        sm="3"
      >
        <nuxt-link to="/guides/2">
          <div
            class="w-full h-full hover:transform hover:scale-110 bg-[url('/guides/league.webp')] guides-bg"
          ></div>
          <div
            class="mt-auto absolute bottom-0 left-0 py-3 px-4 max-h-[50%] w-full bg-gray-900 z-10 text-white bg-opacity-70"
          >
            <h2
              class="font-bold text-lg truncate overflow-hidden text-ellipsis"
            >
              Rocket League Sidewipe puts high-horsepower soccer in your pocket,
              and nails it
            </h2>
            <p class="mb-0 text-base truncate overflow-hidden text-ellipsis">
              Rocket League's new mobile game perfectly encapsulates what makes
              the original so great, but in a side-scrolling format.
            </p>
          </div>
        </nuxt-link>
      </div>
      <div
        class="relative col-span-4 sm:col-span-2 lg:col-span-1 row-span-1 p-0 overflow-hidden"
        sm="3"
      >
        <nuxt-link to="/guides/5">
          <div
            class="w-full h-full hover:transform hover:scale-110 bg-[url('/guides/ces.webp')] guides-bg"
          ></div>
          <div
            class="mt-auto absolute bottom-0 left-0 py-3 px-4 max-h-[50%] w-full bg-gray-900 z-10 text-white bg-opacity-70"
          >
            <h2
              class="font-bold text-lg truncate overflow-hidden text-ellipsis"
            >
              ROG announces a cutting-edge aresenal of gaming gears at CES 2022
            </h2>
            <p class="mb-0 text-base truncate overflow-hidden text-ellipsis">
              2022 is poised to be an awesome year for PC gaming. from brand-new
              laptops, high-refresh rate displays, feature-filled keyboards, and
              DIY PC components, here's all the new gear ROG announced at CES.
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  functional: true,
}
</script>

<style scoped></style>
