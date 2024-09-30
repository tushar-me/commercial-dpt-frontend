<script setup lang="ts">
    import Container from "@/components/Container.vue";
    import AutoPlaySwiper from "@/components/AutoPlaySwiper.vue";
    import Banner from "@/components/Banner.vue";
    import Category from "@/components/Category.vue";
    import WorkingStep from "@/components/WorkingStep.vue";
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import ProductCard from "@/components/ProductCard.vue";
    const modules = [Autoplay, Pagination, Navigation]
</script>

<template>
  <AppLayout>
  <!--  Hero section-->
      <section class="mt-16">
          <div class="w-full">
            <Container>
              <div class="h-full overflow-hidden lg:mt-10 px-2">
                <swiper
                    :spaceBetween="30"
                    :centeredSlides="true"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                        reverseDirection: false
                      }"
                    :pagination="{
                        clickable: true,
                      }"
                    :speed= 2500
                    :navigation="false"
                    :modules="modules"
                    class="mySwiper"
                >
                  <swiper-slide>
                    <Container class="bg-[url('https://img.freepik.com/free-photo/room-used-official-event_23-2151054276.jpg?t=st=1726548234~exp=1726551834~hmac=5382e1d2ed6d02c6dbb0896a52ba2b8cb6e3e534a06f4ce204787f5634629704&w=1060')]
                                   bg-cover py-5 lg:py-10 ">

                        <div class="block h-auto lg:my-5 rounded-md">
                          <div class="flex flex-wrap w-full h-full p-4 lg:p-6">
                            <div class="w-full lg:w-1/2 px-1">
                              <div>
                                <RouterLink to="/" class="text-white font-bold text-lg lg:text-2xl lg:pb-4">Request for Quotations (RFQ)</RouterLink>
                                <p class="text-white font-medium text-xs lg:text-base py-3 lg:py-8">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae culpa cum, delectus earum enim fuga minus nisi placeat sunt?
                                </p>
                                <button class="px-6 py-1 text-white bg-primary text-xs rounded lg:text-base font-semibold">View More</button>
                              </div>
                              <ul class="list-disc py-4 lg:pt-12 px-3 lg:px-6 text-white text-xs lg:text-sm font-semibold">
                                <li>Submit an REQ in just once minute</li>
                                <li>Get multiple Questions from varified supporters</li>
                                <li>Compare and choose the bestquestions.</li>
                              </ul>
                            </div>
                            <div class="w-full lg:w-1/2">
                              <div class="w-full">
                                <div class="bg-white h-auto max-w-lg lg:mx-10 rounded-md lg:px-6 p-3 lg:py-10">
                                  <h1 class="text-gray-500 text-base lg:text-xl font-bold mb-3">Get Quotations Now</h1>
                                  <input type="text" class="w-full rounded-full mb-3 pl-4 border focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                                  <div class="flex gap-4 mb-5">
                                    <div class="w-1/2">
                                      <input type="text" class="w-full rounded-full pl-4 border  focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                                    </div>
                                    <div class="w-1/2">
                                      <input type="text" class="w-full rounded-full pl-4 border  focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                                    </div>
                                  </div>
                                  <button class="px-6 py-1 text-white bg-primary text-sm rounded-full lg:text-base font-semibold">Request for Quotations</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>  
                    </Container>
                  </swiper-slide>
                  <swiper-slide>
                    <Container class="bg-[url('https://img.freepik.com/free-photo/room-used-official-event_23-2151054276.jpg?t=st=1726548234~exp=1726551834~hmac=5382e1d2ed6d02c6dbb0896a52ba2b8cb6e3e534a06f4ce204787f5634629704&w=1060')]
                                bg-cover py-5 lg:py-10">

                        <div class="block h-auto lg:my-5 rounded-md">
                          <div class="flex flex-wrap w-full h-full p-4 lg:p-6">
                            <div class="w-full lg:w-1/2 px-1">
                              <div>
                                <RouterLink to="/" class="text-white font-bold text-lg lg:text-2xl lg:pb-4">Request for Quotations (RFQ)</RouterLink>
                                <p class="text-white font-medium text-xs lg:text-base py-3 lg:py-8">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae culpa cum, delectus earum enim fuga minus nisi placeat sunt?
                                </p>
                                <button class="px-6 py-1 text-white bg-primary text-xs rounded lg:text-base font-semibold">View More</button>
                              </div>
                              <ul class="list-disc py-4 lg:pt-12 px-3 lg:px-6 text-white text-xs lg:text-sm font-semibold">
                                <li>Submit an REQ in just once minute</li>
                                <li>Get multiple Questions from varified supporters</li>
                                <li>Compare and choose the bestquestions.</li>
                              </ul>
                            </div>
                            <div class="w-full lg:w-1/2">
                              <div class="w-full">
                                <div class="bg-white h-auto max-w-lg lg:mx-10 rounded-md lg:px-6 p-3 lg:py-10">
                                  <h1 class="text-gray-500 text-base lg:text-xl font-bold mb-3">Get Quotations Now</h1>
                                  <input type="text" class="w-full rounded-full mb-3 pl-4 border focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                                  <div class="flex gap-4 mb-5">
                                    <div class="w-1/2">
                                      <input type="text" class="w-full rounded-full pl-4 border  focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                                    </div>
                                    <div class="w-1/2">
                                      <input type="text" class="w-full rounded-full pl-4 border  focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                                    </div>
                                  </div>
                                  <button class="px-6 py-1 text-white bg-primary text-sm rounded-full lg:text-base font-semibold">Request for Quotations</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>  
                    </Container>
                  </swiper-slide>
                </swiper>
              </div>
            </Container>
          </div>
      </section>

      <section>
        <Container>
          <div class="flex flex-wrap my-10 lg:-mx-2">
            <div class="w-full lg:w-1/3 px-2 py-2 lg:py-0">
              <div class="relative">
                <img src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/homepage/W-GBBO246_GGA-Brand-Sept_02_HPB_687X267.jpg" alt="">
                <div class="absolute left-5 bottom-5">
                  <h2 class="text-xl font-bold text-white py-2">Your Floor Will Thank You</h2>
                  <p class="text-xs font-semibold text-white hover:underline">Learn About Floor Cleaning Machines >> </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-2">
              <div class="relative">
                <img src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/homepage/W-DTIN230_Global-Export_HPF_687x267.jpg" alt="">
                <div class="absolute left-5 bottom-5">
                  <h2 class="text-xl font-bold text-white py-2">Your Floor Will Thank You</h2>
                  <p class="text-xs font-semibold text-white hover:underline">Learn About Floor Cleaning Machines >> </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-2 py-2 lg:py-0">
              <div class="relative">
                <img src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/display/W-GPSS307_SSGP_HPF_687x267.jpg" alt="">
                <div class="absolute left-5 bottom-5">
                  <h2 class="text-xl font-bold text-white py-2">Your Floor Will Thank You</h2>
                  <p class="text-xs font-semibold text-white hover:underline">Learn About Floor Cleaning Machines >> </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
            <div>
              <AutoPlaySwiper />
            </div>
        </Container>
      </section>

      <section>
        <Container>
            <div>
              <Category />
            </div>
        </Container>
      </section>

      <section >
        <Container class="bg-[url('https://img.freepik.com/free-photo/room-used-official-event_23-2151054276.jpg?t=st=1726548234~exp=1726551834~hmac=5382e1d2ed6d02c6dbb0896a52ba2b8cb6e3e534a06f4ce204787f5634629704&w=1060')]
                          bg-cover py-5 lg:py-10 ">

              <div class="block h-auto lg:my-5 rounded-md">
                <div class="flex flex-wrap w-full h-full p-4 lg:p-6">
                  <div class="w-full lg:w-1/2 px-1">
                    <div>
                      <RouterLink to="/" class="text-white font-bold text-lg lg:text-2xl lg:pb-4">Request for Quotations (RFQ)</RouterLink>
                      <p class="text-white font-medium text-xs lg:text-base py-3 lg:py-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae culpa cum, delectus earum enim fuga minus nisi placeat sunt?
                      </p>
                      <button class="px-6 py-1 text-white bg-primary text-xs rounded lg:text-base font-semibold">View More</button>
                    </div>
                    <ul class="list-disc py-4 lg:pt-12 px-3 lg:px-6 text-white text-xs lg:text-sm font-semibold">
                      <li>Submit an REQ in just once minute</li>
                      <li>Get multiple Questions from varified supporters</li>
                      <li>Compare and choose the bestquestions.</li>
                    </ul>
                  </div>
                  <div class="w-full lg:w-1/2">
                    <div class="w-full">
                      <div class="bg-white h-auto max-w-lg lg:mx-10 rounded-md lg:px-6 p-3 lg:py-10">
                        <h1 class="text-gray-500 text-base lg:text-xl font-bold mb-3">Get Quotations Now</h1>
                        <input type="text" class="w-full rounded-full mb-3 pl-4 border focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                        <div class="flex gap-4 mb-5">
                          <div class="w-1/2">
                            <input type="text" class="w-full rounded-full pl-4 border  focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                          </div>
                          <div class="w-1/2">
                            <input type="text" class="w-full rounded-full pl-4 border  focus:outline-primary border-gray-300 placeholder:text-xs" placeholder="fgdfg">
                          </div>
                        </div>
                        <button class="px-6 py-1 text-white bg-primary text-sm rounded-full lg:text-base font-semibold">Request for Quotations</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
          </Container>
      </section>

      <section>
        <Container class="my-8 ">
          <h2 class="font-bold text-lg lg:text-xl py-6 px-2">Supplies and Solutions for Every Industry</h2>
          <div class="flex flex-wrap px-2 ">
            <div class="w-full lg:w-1/3 px-0.5 py-0.5" v-for="item in 3">
              <div class="flex bg-gray-200 p-5 ">
                <div class="w-2/3 ">
                  <div class="max-w-72">
                    <div class="flex items-center gap-2 pb-4 group">
                      <h2 class="font-semibold text-base lg:text-xl hover:underline group-hover:text-primary leading-none">Grainger KnowHow</h2>
                      <Icon name="material-symbols:arrow-forward-ios-rounded" class="group-hover:text-primary text-sm lg:text-lg" />
                    </div>
                    
                    <p class="text-xs lg:text-sm">
                      News, inspiration and resources to help you get the job done.
                    </p>

                    <h2 class="font-semibold text-xs lg:text-sm pt-4 text-secondary mt-5 -mx-2">
                      <a href="#" class="hover:underline px-2">People</a>
                       <span class="text-gray-500">|</span>
                      <a href="#" class="hover:underline px-2">Operations</a>
                        <span class="text-gray-500">|</span>
                      <a href="#" class="hover:underline px-2">Safety and Health</a>
                    </h2>
                  </div>
                </div>
                <div class="w-1/3">
                  <div class="w-full h-full flex justify-end">
                    <img class="w-16 lg:w-24 h-16 lg:h-24 " src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/homepage/square@3x.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="py-5 text-xs px-2 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sunt quaerat laudantium dolor illo quibusdam non! Voluptate, quia eveniet! Quis dolorum molestias a suscipit est quisquam fugit voluptas commodi laudantium ipsam dolor perspiciatis ratione optio ea cum, ab laborum! Culpa fugiat tempore blanditiis corrupti itaque id, officiis velit deleniti nihil quam explicabo necessitatibus saepe, nemo dolorem provident voluptates quidem molestiae ab praesentium est placeat consequuntur laborum repellat ratione. Atque, nobis. Ipsum voluptas voluptatem autem blanditiis quis quasi dolorum tempora aperiam, fuga, quod ea. Odit, eaque. Ut rem accusamus, ullam odio sit officiis repudiandae neque a veritatis iusto omnis sapiente minima!</p>
        </Container>
      </section>

  </AppLayout>
</template>

<style scoped>

</style>