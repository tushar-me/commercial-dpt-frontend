<script setup lang="ts">
import TopHeader from "@/components/Layouts/TopHeader.vue";
import Footer from "@/components/Layouts/Footer.vue";
import MobileNav from "@/components/Layouts/MobileNav.vue";
</script>

<template>

  <MobileNav />
    <TopHeader />
      <slot />
    <Footer />
</template>

<style scoped>

</style>