<script setup lang="ts">

import AppLayout from "@/components/Layouts/AppLayout.vue";
import Container from "@/components/Container.vue";
import Gallary from "@/components/Gallary.vue";
import Icon from "@/components/Icon.vue";
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <AppLayout>
      <Container>
          <div class="flex flex-wrap py-10 lg:px-12 mt-8 lg:mt-0">
              <div class="w-full lg:w-2/3 px-7">
                  <div>
                    <Gallary />
                  </div>
              </div>
              <div class="w-full lg:w-1/3">
                  <div class="flex flex-col gap-5 mt-5 lg:mt-0">
                      <h2 class="text-lg lg:text-xl font-semibold ">Wholesale Charger USB Car Charger Invisible mini pull ring super fast charge 45W car charger Zinc alloy PD45W/QC3.0 Flash charge</h2>
                      <p class="text-sm text-gray-500 max-w-lg">Safer For The Environment: Our denim factory partner recycles 98% of their water using reverse osmosis
                        filtration and keeps byproducts out of the environment by mixing them with concrete to create building
                        materials.
                      </p>
                      <div class="bg-slate-100 rounded p-4">
                        <p class="text-3xl font-semibold"> ৳ 1000 <span class="text-sm text-gray-500">/ 1 Piece</span></p>
                        <p class="text-xl font-semibold"> 10 Pieces <span class="text-sm text-gray-500">Minimum order</span></p>
                      </div>
                      
                      <div>
                        <ul class=" ">
                          <li class="flex text-sm text-gray-500">
                            <span class="w-1/3 text-sm">Quantity</span>
                            <span class="w-2/3 text-sm">FOB Price</span>
                          </li>
                          <li class="flex">
                            <span class="w-1/3">10–49 Pieces</span>
                            <span class="w-2/3 text-xl font-semibold">US$ 3.5</span>
                          </li>
                          <li class="flex">
                            <span class="w-1/3">50–499 Pieces</span>
                            <span class="w-2/3 text-xl font-semibold">US$ 3.4</span>
                          </li>
                          <li class="flex"> 
                            <span class="w-1/3">≥500 Pieces</span>
                            <span class="w-2/3 text-xl font-semibold">US$ 3</span>
                          </li>
                          
                        </ul>
                      </div>
                      <div>
                        <h3 class="text-sm text-gray-800 font-bold py-2">Product Attribute</h3>
                        <ul class="flex flex-col gap-1 ">
                          <li class="flex">
                          <span class="w-1/3">Applicable:</span>
                          <span class="w-2/3 text-sm">Ebook, Laptop, Phone, Tablet, Universal</span>
                          </li>
                          <li class="flex">
                          <span class="w-1/3">Interface:</span>
                          <span class="w-2/3 text-sm">Mini USB, USB, USB-C</span>
                          </li>
                          <li class="flex">
                          <span class="w-1/3">Plug Type:</span>
                          <span class="w-2/3 text-sm">AU, EU, EU/AU/UK/US, UK, US</span>
                          </li>
                        </ul>
                      </div>

                      <div class="">
                        <div class="flex flex-wrap">
                          <div class="w-1/4 ">
                            <div class="flex gap-1 lg:gap-2 items-center border border-primary rounded-full px-3 py-1">
                              <button><Icon name="material-symbols:add" class="text-xl lg:text-2xl text-gray-500" /></button>
                              <p class="text-sm lg:text-xl">1</p>
                              <button><Icon name="ic:outline-minus" class="text-xl lg:text-2xl text-gray-500" /></button>
                            </div>
                          </div>
                          <div class="w-3/4 pl-5 ">
                            <RouterLink to="/cart" class="w-full block bg-primary rounded-full text-white py-1 lg:py-2 text-center text-sm lg:text-md">
                              Add to Cart
                            </RouterLink>
                          </div>
                          <div class="w-full py-3">
                            <RouterLink to="/checkout" class="bg-secondary rounded-full text-white py-1 lg:py-2 block text-center text-sm lg:text-md">
                                 Buy Now
                            </RouterLink>
                          </div>
                        </div>   
                      </div>
                      <div class="flex gap-3">
                        <h3 class="text-sm text-gray-400">Payment : </h3>
                        <ul class="flex gap-1">
                          <li>
                            <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon_paypal.svg" alt="">
                          </li>
                          <li>
                            <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon-mastercard.svg" alt="">
                          </li>
                          <li>
                            <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon_visa.svg" alt="">
                          </li>
                          <li>
                            <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon_AmericanExpress.svg" alt="">
                          </li>
                          <li>
                            <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon_discover.svg" alt="">
                          </li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div>
              <h2 class="text-xl lg:text-2xl font-semibold py-2"> Description</h2>
              <p class="text-sm py-3">Our favorite jean meets our favorite decade. Made from premium non-stretch Japanese denim for a vintage-inspired look,
                the ’90s Cheeky Jean has an easy straight leg, an extra-high rise, and a butt-boosting rear fit. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
              </p>

              <h2 class="text-xl lg:text-2xl font-semibold py-3"> Related Products</h2>
              <div class="flex flex-wrap lg:p-6">
                  <div class="w-1/2 lg:w-1/5 px-2 py-2"  v-for="item in 10">
                    <ProductCard />
                  </div>
              </div>
          </div>
      </Container>
  </AppLayout>
</template>

<style scoped>

</style>