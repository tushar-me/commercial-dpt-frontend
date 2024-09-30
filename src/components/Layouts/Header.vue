<script setup lang="ts">

import Container from "@/components/Container.vue";
import Icon from "@/components/Icon.vue";
</script>

<template>
    <header class="hidden lg:block">
<!--      top header -->
        <section>
           <Container class="flex justify-between py-2 border-b border-gray-300">
               <ul class="flex gap-4 items-center">
                  <li>
                      <a href="">
                        <Icon name="uil:facebook-f" class=" hover:text-primary" />
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <Icon name="circum:instagram" class="hover:text-primary" />
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <Icon name="uil:twitter" class="hover:text-primary" />
                      </a>
                  </li>
                  <li>
                      <a href="">
                        <Icon name="basil:whatsapp-outline" class="hover:text-primary" />
                      </a>
                  </li>
               </ul>

              <ul class="flex gap-5 items-center">
                  <li>
                     <p class="uppercase font-medium text-gray-600 text-xs">Currency</p>
                  </li>
                  <li>
                    <p class="uppercase font-medium text-gray-600 text-xs">Quick Help</p>
                  </li>
                  <li>
                    <Icon name="hugeicons:language-skill" />
                  </li>
                  <li>
                    <Icon name="material-symbols:notifications-active-outline-sharp" />
                  </li>
                
              </ul>
           </Container>
        </section>
<!--      2nd top header -->
        <section class="border-b border-gray-300">
          <Container class="py-3">
              <div class="flex justify-between items-center">
                
                <div>
                  <img class="w-76 h-10 my-2" src="@/assets/images/logo.png" alt="">
                </div>

                <div class=" w-2/4 ">
                  <div class="relative flex items-center rounded-full overflow-hidden border border-gray-300 focus:ring-0 ">
                    <select  class=" py-2.5 px-4 text-sm font-medium text-center text-white  rounded bg-primary focus:ring-0 focus:outline-none">
                      <option selected>All Products</option>
                      <option>All Products</option>
                      <option>Men </option>
                      <option>Women</option>
                    </select>
                    
                    <input type="search" id="search-dropdown" class=" block p-2.5 w-full z-20 text-sm text-gray-900 focus:outline-0 bg-gray-50  " placeholder="Search Mockups, Logos, Design Templates..." required />
                    <button class="absolute top-0 bottom-0 right-3 z-20">
                        <Icon name="emojione-monotone:magnifying-glass-tilted-right"  class="text-2xl text-primary"/>
                    </button>
                  </div>
                </div>
 
                <div>
                  <p class="text-sm font-bold text-gray-600">Support Line</p>
                  <p class="text-sm font-bold text-secondary">96000123456 / info@abc.com</p>
                </div>
              </div>
          </Container>
        </section>
<!--      menu section -->
        <section class="border-b border-gray-300">
          <Container class="flex justify-between px-6 py-2">
            <div class="flex gap-2 items-center ">
                <div class="flex gap-3 items-center bg-secondary w-52 rounded text-white font-bold px-3 py-3">
                  <Icon name="heroicons:bars-3-16-solid" class="text-2xl" />
                  <p class="text-sm px-2 text-nowrap">ALL CATEGORIES</p>
                  <Icon name="material-symbols:keyboard-arrow-down" class="text-2xl " />
                </div>
               
            </div>
            <div class="w-full ">
                    <ul class="flex w-full justify-between px-20">
                        <li>
                            <RouterLink to="/" class="flex items-center gap-2 text-gray-600">
                              <Icon name="hugeicons:truck-delivery" class="text-2xl " />
                              <div>
                                <p class="text-sm font-bold">Free Shpping and Return</p>
                                <p class="text-xs">Free shiping on all orders over $99</p>
                              </div>
                              
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/" class="flex items-center gap-2 text-gray-600">
                              <Icon name="ph:currency-circle-dollar-duotone" class="text-2xl " />
                              <div>
                                <p class="text-sm font-bold">Money Back Guranty</p>
                                <p class="text-xs">100% Money Back Guranty</p>
                              </div>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/" class="flex items-center gap-2 text-gray-600">
                              <Icon name="tabler:clock-24" class="text-2xl " />
                              <div>
                                <p class="text-sm font-bold">OnlineSupport 24/7</p>
                                <p class="text-xs">Always Dedicated Team</p>
                              </div>
                            </RouterLink>
                        </li>
                       
                    </ul>
                </div>
            <div>
                  <ul class="flex gap-4 items-center justify-center">
                    <li>
                      <RouterLink to="/" class="relative">
                        <Icon name="material-symbols-light:shopping-bag-outline" class="text-2xl" />
                        <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full  bg-primary text-white flex items-center justify-center text-xs">0</span>
                      </RouterLink>
                    </li>
                    
                    <li class="">
                      <RouterLink to="/">
                        <Icon name="material-symbols:account-circle-full" class="text-xl" />
                      </RouterLink>

                      <!-- <div class="flex items-center absolute -left-44 w-52 p-3 shadow-xl bg-white top-5 opacity-100 -z-40 group-hover:z-40 transition-all ease-in-out duration-500">
                        <RouterLink to="/login" class="w-1/2 h-6 group/button block overflow-hidden text-center hover:bg-gray-600  hover:text-white rounded-md text-sm font-medium">
                         <div class="group-hover/button:-translate-y-5 transition-all ease-in-out duration-100">
                           <span class="w-full block">Login</span>
                           <span class="w-full block">Login</span>
                         </div>
                        </RouterLink>
                        <RouterLink to="/register" class="w-1/2 h-6 group/button block overflow-hidden text-center hover:bg-gray-600  hover:text-white rounded-md text-sm font-medium">
                         <div class="group-hover/button:-translate-y-5 transition-all ease-in-out duration-100">
                           <span class="w-full block">Register</span>
                           <span class="w-full block">Register</span>
                         </div>
                        </RouterLink>
                      </div> -->
                    </li>
                    <li>
                      <RouterLink to="/"> <Icon name="heroicons:bars-3-16-solid" class="text-2xl text-secondary" /></RouterLink>
                    </li>
                  </ul>
                </div>
            
          </Container>
        </section>
    </header>
</template>

<style scoped>

</style>