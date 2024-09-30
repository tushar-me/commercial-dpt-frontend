<script setup lang="ts">

</script>

<template>
    <div class="shadow-lg rounded-md">
      <RouterLink to="/vendor" class="relative">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="absolute top-2 right-2 text-blue-500 " height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>
        <img class="w-full h-28 lg:h-44 object-contain p-3 lg:p-7" src="https://media.e-valy.com/cms/brands/logo/9ecd5993-e68f-47e5-b132-ad376487a1e0?h=350&w=350" alt="">
        <span class="absolute left-4 -bottom-2.5 bg-blue-500 p-1 text-white text-xs rounded  ">COD</span>
      </RouterLink>
      <div class="px-4 py-5 border-t">
          <ul class="flex flex-col gap-3">
            <li class="text-xs text-gray-400">Delivery in 1-9 Days</li>
            <li class="text-xs lg:text-sm text-black"><RouterLink to="/vendor">Official Store For Flash Sale COD</RouterLink></li>
          </ul>
      </div>
    </div>
</template>

<style scoped>

</style>