b <script setup>

// import useAxios from "@/composables/useAxios.js"
// import {useAuthStore} from "@/stores/useAuthStore.js";
// import { toast } from 'vue3-toastify';
// import { useRoute } from 'vue-router'
// import { ref, onMounted, computed } from 'vue'
// const { loading, error, sendRequest } = useAxios();
// const { params } = useRoute();
// const product =ref(null);
//
// const auth = useAuthStore();
//
// const addresses =ref(null);
//
// const  form = ref({
//   user_id:auth?.user?.id,
//   product_id:params?.id,
//   address_id:null,
// })
// const getData = (async () => {
//
//   const response = await sendRequest({
//     method: 'POST',
//     url:'/api/checkout',
//     data:form.value,
//   });
//   addresses.value = response?.data?.address;
//   product.value = response?.data?.product;
//
// });
//
// onMounted(()=>{
//   getData()
// });
//
// const orderCheckout = (async () =>{
//   try{
//     const response = await sendRequest({
//       method:'POST',
//       url:'/api/orders',
//       data:form.value,
//       params: {
//         price: product.value.bdt_price
//       }
//     })
//     if (response.data) {
//       toast("Succsessfully Order Completed..!", {
//         autoClose: 1000,
//         position: toast.POSITION.TOP_RIGHT,
//       });
//       location.reload();
//     }
//   }catch (error) {
//     // Handle network errors or unexpected errors
//     console.error("An error occurred:", error);
//     toast.error(" Please select Address.", {
//       autoClose: 3000,
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   }
// });
import Container from "@/components/Container.vue";
</script>

<template>
  <AppLayout>
    <Container>
      <div class="container flex flex-wrap">
        <div class="w-full lg:w-3/4 lg:pr-5 mb-10 lg:mb-0 mt-6 lg:mt-5">
          <div class="flex">
            <div class="w-full lg:w-2/3">
              <h2 class="text-2xl font-bold text-gray-700 py-5">Select Address</h2>
              <div class="flex flex-col lg:flex-row lg:gap-4">
                <div class="w-full lg:w-1/2 h-full shadow-lg border p-4 border-gray-300 rounded-lg">
                  <p class="text-xl font-medium text-gray-700">Address</p>
                  <ul class="text-sm font-normal py-2">
                    <li>Mirpur, dhaka</li>
                    <li>sum@sum.com</li>
                    <li>1997743456</li>
                    <li>Area: Dhaka & Delivery Charge: 120 BDT</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap shadow-2xl rounded-md bg-white mt-5 p-8">
            <div class="w-full lg:w-1/2 mb-3 px-2">
              <label for="name"  class="block py-2 font-semibold"> Name</label>
              <input type="text" name="name" id="name" class="border border-gray-300 focus:outline-none w-full p-2 rounded-md " placeholder="Your Name">
            </div>
            <div class="w-full lg:w-1/2 mb-3 px-2">
              <label for="number"  class="block py-2 font-semibold"> Mobile Number</label>
              <input type="number" name="number" id="number" class="border border-gray-300 focus:outline-none w-full p-2 rounded-md " placeholder="Your Phone Number">
            </div>
            <div class="w-full lg:w-1/2 mb-3 px-2">
              <label for="email"  class="block py-2 font-semibold">E-mail</label>
              <input type="email" name="email" id="email" class="border border-gray-300 focus:outline-none w-full p-2 rounded-md " placeholder="Your E-mail">
            </div>
            <div class="w-full lg:w-1/2 mb-3 px-2">
              <label for="city"  class="block py-2 font-semibold"> City</label>
              <input type="text" name="city" id="city" class="border border-gray-300 focus:outline-none w-full p-2 rounded-md " placeholder="Your City">
            </div>
            <div class="w-full lg:w-1/2 mb-3 px-2">
              <label for="state"  class="block py-2 font-semibold"> State</label>
              <input type="text" name="state" id="state" class="border border-gray-300 focus:outline-none w-full p-2 rounded-md " placeholder="Your State">
            </div>
            <div class="w-full lg:w-1/2 mb-3 px-2">
              <label for="zip"  class="block py-2 font-semibold"> Zip</label>
              <input type="number" name="zip" id="city" class="border border-gray-300 focus:outline-none w-full p-2 rounded-md " placeholder="Your ZIP">
            </div>
            <div class="w-full mb-3 px-2">
              <label for="address"  class="block py-2 font-semibold"> Address</label>
              <textarea id="address" name="address" rows="4" cols="2" class="border border-gray-300 focus:outline-none w-full p-2 rounded-md " placeholder="Your Address"></textarea>
            </div>
          </div>
          <div class="flex justify-center">
            <button class="rounded w-1/2 text-white text-base font-semibold mt-10 lg:my-10 py-1 px-3 lg:tracking-wide bg-black hover:bg-white border border-black hover:text-black
                                 text-center transition-all ease-in-out duration-500">Save Address</button>
          </div>

          <div class="flex flex-col items-start">
            <h2 class="text-xl font-bold text-gray-600 mb-5 mt-16 lg:mb-8">Select Your Payment Method</h2>

            <div class="flex flex-wrap">
              <div class="w-1/2 lg:w-1/6 px-1 mb-5">
                <input type="radio" class="peer hidden" name="method" id="cod">
                <label for="cod" class="border-2 bg-gray-200 rounded-lg peer-checked:border-gray-600 block cursor-pointer">
                  <img class="w-full h-auto object-cover rounded-md" src="https://static.vecteezy.com/system/resources/previews/035/026/415/non_2x/cash-on-delivery-or-cod-icon-design-for-shipping-coupon-bonus-logo-seal-tag-sign-seal-symbol-badge-stamp-sticker-template-website-apps-illustration-free-vector.jpg" alt="">
                </label>
              </div>
              <div class="w-1/2 lg:w-1/6 px-1 mb-5">
                <input type="radio" class="peer hidden" name="method" id="cod">
                <label for="cod" class="border-2 bg-gray-200 rounded-lg peer-checked:border-gray-600 block cursor-pointer">
                  <img class="w-full h-auto object-cover rounded-md" src="https://1000logos.net/wp-content/uploads/2021/09/Payoneer-logo-old.png" alt="">
                </label>
              </div>
              <div class="w-1/2 lg:w-1/6 px-1 mb-5">
                <input type="radio" class="peer hidden" name="method" id="cod">
                <label for="cod" class="border-2 bg-gray-200 rounded-lg peer-checked:border-gray-600 block cursor-pointer">
                  <img class="w-full h-auto object-cover rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFiXtMWdFcj3PJS1Tt7LK_ofnDWnfv6knrw&s" alt="">
                </label>
              </div>
              <div class="w-1/2 lg:w-1/6 px-1 mb-5">
                <input type="radio" class="peer hidden" name="method" id="cod">
                <label for="cod" class="border-2 bg-gray-200 rounded-lg peer-checked:border-gray-600 block cursor-pointer">
                  <img class="w-full h-auto object-cover rounded-md" src="https://media.designrush.com/inspiration_images/656402/conversions/3-mobile.jpg" alt="">
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/4">
          <div class=" py-7 my-5 lg:mt-8 shadow-lg bg-white rounded-md px-5">
            <div class="flex justify-between items-center">
              <p class="text-sm font-medium">Subtotal:</p>
              <p class="font-bold text-sm py-2"> ৳3000</p>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-sm font-medium">Shipping :</p>
              <p class="font-bold text-sm"> ৳50</p>
            </div>

            <div class="flex justify-between items-center py-5">
              <p class="text-lg font-bold">Total (TAKA):</p>
              <p class="font-bold text-lg"> ৳3050</p>
            </div>
            <RouterLink to="/">
              <button class="rounded w-full text-white text-base font-semibold py-1 px-3 lg:tracking-wide bg-gray-700  hover:bg-white border border-gray-600 hover:text-gray-700
                                 text-center transition-all ease-in-out duration-500">Order Complete</button>
            </RouterLink>
          </div>
        </div>
      </div>


    </Container>
  </AppLayout>

</template>

