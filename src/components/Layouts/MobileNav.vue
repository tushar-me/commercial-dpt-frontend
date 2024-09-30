

<script setup lang="ts">
import {ref} from 'vue'
import {RouterLink} from "vue-router";
const toggleNav = ref(false);
</script>

<template>
  <!--  phone nav bar-->

  <nav class="lg:hidden z-50 fixed top-0 left-0 right-0 w-full bg-white shadow-md" >

    <!--        menu & logo  -->
    <div class="flex items-center justify-between">
      <div>
        <RouterLink to="/" class="">
          <img class="w-48 h-auto p-2" src="@/assets/images/logo.png"  alt="Logo" >
        </RouterLink>
      </div>
      <div>
        <div class="">
          <button @click="toggleNav = !toggleNav">
            <Icon name="material-symbols:menu" class="text-4xl text-black mx-3" />
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div :class="{'translate-x-0': toggleNav, 'translate-x-80': !toggleNav}" class="fixed top-0 right-0 bottom-0 w-64 h-full z-50 lg:hidden transition-all
                    ease-in-out duration-500 bg-white overflow-y-scroll shadow-lg">
    <div class="flex justify-between p-1.5 bg-primary">
      <button  @click="toggleNav = false">
        <Icon name="material-symbols:close-small" class=" text-4xl text-gray-600" />
      </button>
    </div>

    <div class="px-4 py-3">


      <ul class="py-3 px-2 leading-loose font-semibold text-xs tracking-wide">
        <li>
          <RouterLink to="/category" class="text-nowrap text-sm">All Categories</RouterLink>
        </li>
        <li> <RouterLink to="/shops" class="text-nowrap text-sm">SHOPS </RouterLink></li>
        <li> <RouterLink to="/product" class="text-nowrap text-sm">ALL PRODUCTS</RouterLink></li>
        <li> <RouterLink to="/vendor" class="text-nowrap text-sm">VENDOR</RouterLink></li>
        <li> <RouterLink to="/category" class="text-nowrap text-sm">FEATURES</RouterLink></li>
        <li> <RouterLink to="/category" class="text-nowrap text-sm">COMPAINGCE</RouterLink></li>
        <li> <RouterLink to="/profile" class="text-nowrap text-sm">PROFILE</RouterLink></li>

      </ul>

      <div class="flex mt-12">
        <RouterLink to="/login" class="text-blue-700 font-bold text-sm p-3">
          Login
        </RouterLink>
        <p class="text-gray-400 p-3"> or </p>
        <RouterLink to="/register" class="text-blue-700 font-bold text-sm my-3  px-3">
          Registration
        </RouterLink>
      </div>
    </div>
  </div>
  <!--  phone nav bar end-->
</template>
