<script setup lang="ts">
import AppLayout from "@/components/Layouts/AppLayout.vue";
import Container from "@/components/Container.vue";
import ProductCard from "@/components/ProductCard.vue";


</script>

<template>
  <AppLayout>
      <section class=" border-b border-gray-300 mt-16 lg:mt-0">
          <div>
            <img src="https://www.alexinternational.ro/wp-content/uploads/2016/02/banner-home-alexinternational-WOMENS-CLOTHING.jpg?fbclid=IwY2xjawFNIA5leHRuA2FlbQIxMAABHXjHHoGj7AVgEeXJSmEl5WSyjtEXtkC7Z_t6IUF5RMW2k7cfHKgm864q2w_aem_MIfdg94meLH_IsDcTn2upw" alt="">
          </div>
        </section>

      <section>
          <Container>
              <div class="flex">
                  <div class="w-1/5 hidden lg:block">
                    <div class="border-r  border-gray-300 h-full">

                    </div>
                  </div>
                  <div class="w-full lg:w-4/5 ">
                      <div class="flex flex-wrap lg:p-6 py-5  ">
                          <div class="w-1/2 lg:w-1/4 px-2 " v-for="item in 12">
                            <ProductCard />
                          </div>
                      </div>
                  </div>
              </div>
        </Container>
      </section>
  </AppLayout>
</template>

<style scoped>

</style>