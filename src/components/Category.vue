<script setup lang="ts">

import Container from "@/components/Container.vue";
</script>

<template>
      <div>
            <h3 class="text-xl lg:text-2xl font-medium text-secondary py-6">Categories</h3>
            <div class="grid grid-cols-2 lg:grid-cols-7 mb-6 px-2">
                <div class="w-full" v-for="item in 14">
                    <RouterLink to="/" class="flex flex-col items-center justify-between border border-slate-300 hover:border-primary bg-white lg:p-5 ">
                        <img src="https://static.grainger.com/rp/s/is/image/Grainger/CGI-SafetyPair?hei=122&wid=122&$adapimg$=" alt="">
                        <p class="text-sm text-center py-5 hover:underline">Safety & Security </p>
                    </RouterLink>
                </div>
            </div>
        </div>
</template>
<style scoped>

</style>