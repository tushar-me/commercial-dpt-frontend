<script setup lang="ts">
import AppLayout from "@/components/Layouts/AppLayout.vue";
import Container from "@/components/Container.vue";
import AutoPlaySwiper from "@/components/AutoPlaySwiper.vue";
import ProductCard from "@/components/ProductCard.vue";


</script>

<template>
  <AppLayout>
    <section class="bg-slate-100">
      <Container>
        <div class="flex">
            <div class="w-1/5 hidden lg:block">
              <div class="border-r  border-gray-300 h-full">
              </div>
            </div>
            <div class="w-full lg:w-4/5">
              <div class="flex flex-wrap lg:p-6 py-7 ">
                  <div class="w-1/2 lg:w-1/4 px-2 my-2" v-for="item in 12">
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