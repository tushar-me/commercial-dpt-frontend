<script setup lang="ts">

import AppLayout from "@/components/Layouts/AppLayout.vue";
import Container from "@/components/Container.vue";
import ShopCard from "@/components/ShopCard.vue";
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <AppLayout>
    <Container>
      <div class="lg:px-10 mt-8">
        <h2 class="font-semibold text-2xl lg:text-4xl text-black py-8">Shops</h2>
        <div class="flex flex-wrap lg:p-6">
          <div class="w-1/2 lg:w-1/5 px-4 pb-8" v-for="item in 15">
            <ShopCard />
          </div>
        </div>

      </div>
    </Container>
  </AppLayout>
</template>

<style scoped>

</style>