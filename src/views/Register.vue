<template>
  <AppLayout>
    <div class=" w-full flex justify-center items-center  py-10 lg:py-20 mt-5 lg:mt-0">
      <div class="w-[90%] max-w-4xl bg-white flex flex-wrap rounded-xl shadow-xl p-4">
        <div class="w-full lg:w-1/2 lg:pr-5 lg:pt-10">
          <h3 class="text-2xl font-semibold mb-3">Registration</h3>
          <div class="">
            <label for="name" class="block pb-1 text-xs" >Name</label>
            <input type="text" name="name" id="name" class="bg-transparent block w-full rounded-md  p-2 shadow-sm border  border-primary focus:outline-none  placeholder:text-gray-400 px-3 mb-2">
          </div>
          <div class="">
            <label for="number" class="block pb-1 text-xs" >Phone Number</label>
            <input type="number" name="number" id="number" class="bg-transparent block w-full rounded-md  p-2 shadow-sm border  border-primary focus:outline-none  placeholder:text-gray-400 px-3 mb-2">
          </div>
          <div class="">
            <label for="email" class="block pb-1 text-xs" >Email</label>
            <input type="email" name="email" id="email" class="bg-transparent block w-full rounded-md  p-2 shadow-sm border  border-primary focus:outline-none  placeholder:text-gray-400 px-3 mb-2">
          </div>
          <div class="">
            <label for="password" class="block pb-1 text-xs">Password</label>
            <input type="password" name="password"  id="password" class="bg-transparent block w-full rounded-md  p-2  shadow-sm border border-primary focus:outline-none  placeholder:text-gray-400 px-3 mb-2">
          </div>

          <div class="text-center py-5">
            <button @click="handleLogin" class="w-full py-2 bg-primary text-white font-bold text-center rounded-lg my-2">Registration</button>
          </div>
        </div>
        <div class="hidden lg:block w-1/2 mt-12">
          <img class="w-full h-96  object-cover rounded-xl" src="https://cdn.logojoy.com/wp-content/uploads/20231122153748/what-is-graphic-design-header.jpg" alt="">
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
// import { ref } from 'vue';
// // import { useAuthStore } from '@/stores/useAuthStore.js';
// import { useRouter, useRoute } from 'vue-router'
// // import { toast } from "vue3-toastify";
//
//
// const authStore = useAuthStore();
// const router = useRouter()
// const route = useRoute()
//
// const loginCredential = ref({
//   email: 'admin@admin.com',
//   password: '12345678',
// });

const handleLogin = async () => {
  const loginResponse = await authStore.login(loginCredential.value);
  if (loginResponse) {
    toast.success('Login successful!', { autoClose: 1000 });
    const redirectPath = route.query.redirect || '/admin/dashboard';
    router.push(redirectPath);
  }
}
</script>