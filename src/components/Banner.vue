<script setup lang="ts">

import Container from "@/components/Container.vue";
</script>

<template>
    <section>
      <Container>
        <div class="flex flex-wrap lg:flex-row  items-center my-20 lg:-mx-5">
          <div class="w-full lg:w-1/2 lg:px-5 mb-5 lg:mb-0">
            <div class="flex flex-wrap rounded overflow-hidden">
              <div class="w-full lg:w-1/2">
                <div class="flex flex-col h-full gap-5 items-center justify-center p-5 bg-red-800/15">
                  <p class="px-3 py-1 text-center bg-red-800 w-1/2 text-white font-semibold text-xs rounded-full hover:bg-red-700/15 hover:text-red-800">NEW PRODUCT</p>
                  <h2 class="text-red-600 text-2xl font-bold">Fashion Accessories</h2>
                  <p class="text-red-600 font-semibold text-xs">Up to 40% off Accessories</p>
                  <p class="text-red-600 font-semibold text-xs">Check Details</p>
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <div class="w-full h-full">
                  <img class="w-full h-56 rounded" src="https://ninetheme.com/themes/dressy/wp-content/uploads/2024/08/horizontal-1500-11.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 lg:px-5">
            <div class="flex flex-wrap rounded overflow-hidden">
              <div class="w-full lg:w-1/2">
                <div class="flex flex-col h-full gap-5 items-center justify-center p-5 bg-purple-800/15">
                  <p class="px-3 py-1 text-center bg-purple-800 w-1/2 text-white font-semibold text-xs rounded-full hover:bg-purple-700/15 hover:text-purple-800 uppercase">trend product</p>
                  <h2 class="text-purple-600 text-2xl font-bold">Trend Products</h2>
                  <p class="text-purple-600 font-semibold text-xs">Up to 22% off T-shirts</p>
                  <p class="text-purple-600 font-semibold text-xs">Check Details</p>
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <div class="w-full h-full">
                  <img class="w-full h-56 rounded" src="https://ninetheme.com/themes/dressy/wp-content/uploads/2024/08/horizontal-1500-3.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
</template>

<style scoped>

</style>