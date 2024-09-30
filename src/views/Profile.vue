<script setup lang="ts">
import AppLayout from "@/components/Layouts/AppLayout.vue";
import Container from "@/components/Container.vue";
</script>

<template>
    <AppLayout>
        <Container>
            <div class="flex flex-wrap py-10 max-w-5xl mx-auto mt-7 lg:mt-0">
                <div class="w-full lg:w-1/4 px-6 mb-6 lg:mb-0">
                    <div class="flex flex-col rounded bg-gray-200 p-4 h-full">
                        <div class=" flex flex-col items-center justify-center">
                            <img class="w-20 h-20 object-cover rounded-full" src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg" alt="">
                            <div class="text-center">
                              <h2 class="text-lg font-semibold">Claudia Mills</h2>
                              <p class="text-xs ">Customer</p>
                            </div>
                        </div>
                        <div class="text-left pt-10">
                            <ul >
                                <li class="mb-5">
                                 <p class="text-sm text-gray-500"> Email Address:</p>
                                  <p class="font-semibold">cluaudiamills@gmail.com</p>
                                </li>
                                <li class="mb-5">
                                 <p class="text-sm text-gray-500"> Phone Number:</p>
                                  <p class="font-semibold">+0088 098877 8777</p>
                                </li>
                                <li class="mb-5">
                                 <p class="text-sm text-gray-500">Address:</p>
                                  <p class="font-semibold">West Badda , Badda, Dhaka</p>
                                </li>
                                <li class="mb-16">
                                  <p class="text-sm text-gray-500"> Info:</p>
                                  <p class="font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur deleniti eos explicabo id iure maxime mollitia, tempore unde voluptatem?</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-3/4 h-screen overflow-y-scroll">
                  <div class=" rounded bg-gray-200 p-3 lg:p-9">
                      <h2 class="text-base lg:text-lg font-semibold">Order List</h2>
                    <div class="pt-10">
                      <div class="flex flex-col gap-4">
                        <div  class="flex gap-3 w-full border border-gray-400 p-3 rounded" v-for="order in 10">
                          <div class="min-w-28 max-w-28 h-auto bg-slate-200 rounded-md overflow-hidden">
                            <img src="https://img.freepik.com/premium-photo/travel-mag-with-friiut-flowers_1187092-82822.jpg?ga=GA1.1.137859586.1722497502&semt=ais_hybrid" class="w-full h-full" alt="">
                          </div>
                          <div class="w-full relative">
                            <RouterLink to="" class="absolute top-0 right-0 block border border-gray-300 px-2 py-1 text-xs rounded">view</RouterLink>
                            <div>
                              <h3 class="text-base lg:text-lg">#55678909877</h3>
                              <p class="text-xs lg:text-base">Order Date: </p>
                              <p class="text-xs lg:text-base">Price: 300</p>
                              <span class="text-xs lg:text-base ">Status: pending</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </Container>
    </AppLayout>
</template>

<style scoped>

</style>