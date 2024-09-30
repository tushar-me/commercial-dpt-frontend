<script setup lang="ts">

import AppLayout from "@/components/Layouts/AppLayout.vue";
import AutoPlaySwiper from "@/components/AutoPlaySwiper.vue";
import Container from "@/components/Container.vue";
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
    <AppLayout>
        <section class="border-b border-gray-300 py-3">
            <Container>
                <div class="relative h-64 lg:h-80 mt-12 lg:mt-0">
                    <img class="object-cover w-full h-full" src="https://blog.daraz.pk/wp-content/uploads/2020/03/WOMEN-TSHIRT-BANNER-1.jpg?fbclid=IwY2xjawFLxWdleHRuA2FlbQIxMAABHZhL0FgNINnHy6IiIWwYoy1_6ceZZ1tI-t9v2cC8aRkhGRtp6bQBou9xAQ_aem_81hT45h0Z3zbJo1RWBfQzg" alt="">
                    <div class="absolute w-full max-w-72 lg:max-w-sm left-5 top-1/2 -translate-y-1/2 p-4 bg-white shadow-xl flex gap-3">
                      <img class="h-16 lg:h-20 w-16 lg:w-20" src="https://media.e-valy.com/cms/brands/logo/9ecd5993-e68f-47e5-b132-ad376487a1e0?h=350&w=350" alt="">
                      <div>
                        <h2 class="text-xl lg:text-2xl font-semibold text-black pb-2">Elite Wear</h2>
                        <p class="text-sm lg:text-base">91% Positive Seller Ratings</p>
                      </div>
                    </div>
                </div>
            </Container>
        </section>

      <section>
        <Container>
          <div class="flex">
            <div class="w-1/5 hidden lg:block">
              <div class="border-r  border-gray-300 h-full">

              </div>
            </div>
            <div class="w-full lg:w-4/5">
              <div class="flex flex-wrap lg:p-6 py-7 ">
                <div class="w-1/2 lg:w-1/4 px-2" v-for="item in 12">
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </AppLayout>
</template>
+
<style scoped>

</style>