<script setup>


import Container from "@/components/Container.vue";
</script>
<template>
  <AppLayout>
    <Container>
      <div class="container flex flex-wrap justify-between py-5 mt-5 lg:mt-0">
        <div class="w-full lg:w-8/12 lg:pr-5 mb-10">
          <div class="flex flex-wrap justify-between shadow-xl bg-white rounded-md mt-5 mx-10 lg:mx-0" v-for="item in 2">
            <div class="w-full lg:w-1/5">
              <div class="p-3">
                <img class="w-full h-44 lg:h-32 rounded-lg object-cover"
                     src="https://p.globalsources.com/IMAGES/PDT/S1218071938/Car-GPS-trackers.jpg?ver=6017180338" alt="">
              </div>
            </div>
            <div class="w-full lg:w-4/5">
              <div class="w-full p-4">
                <div class="flex justify-between">
                  <div>
                    <h2 class="font-semibold text-lg lg:text-xl">Wholesale OEM logo USB C 20000mah PD22.5W"</h2>
                  </div>
                  <div>
                    <p class="font-bold text-sm lg:text-lg"> ৳3000</p>
                  </div>
                </div>

                <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end pt-5">
                  <div class="flex gap-8 text-sm lg:text-base text-gray-400 pt-3 lg:pt-0">
                    <button>Move to Wishlist</button>
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-4/12">
          <div class="p-3 rounded-lg bg-white text-center mb-8 shadow-lg lg:mt-5 mx-10 lg:mx-0">
            <p class="text-sm font-medium">Subtotal:</p>
            <p class="font-bold text-xl py-3"> ৳3000</p>
            <RouterLink to="/checkout">
              <button class="rounded w-full text-white text-base font-semibold py-1 px-3 lg:tracking-wide bg-black hover:bg-white border border-gray-600 hover:text-gray-600
                                 text-center transition-all ease-in-out duration-500">Checkout Now</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </Container>
  </AppLayout>
</template>

