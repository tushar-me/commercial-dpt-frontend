<script setup lang="ts">
import Header from "@/components/Layouts/Header.vue";
import Footer from "@/components/Layouts/Footer.vue";
import MobileNav from "@/components/Layouts/MobileNav.vue";
</script>

<template>

  <MobileNav />
    <Header />
      <slot />
    <Footer />
</template>

<style scoped>

</style>