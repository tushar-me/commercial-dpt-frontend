<script setup lang="ts">

import Container from "@/components/Container.vue";
</script>

<template>
  <footer class="bg-[url('https://img.freepik.com/free-photo/modern-background-with-lines_1361-3533.jpg?t=st=1725856894~exp=1725860494~hmac=a3ccb4e8508a73aac22d232adb697e85e95fbb267875cb123b0e60026129e52e&w=740')]
                  bg-cover bg-no-repeat h-auto bg-bottom">
    <section >
      <Container>
        <div>
            <div class="border-b border-gray-700">
              <img class="w-44 h-24 px-10 py-5" src="@/assets/images/logo.png" alt="">
            </div>

            <div class="flex flex-wrap py-8 px-10">
              <div class="w-1/2 lg:w-1/4 p-3 ">
                <h2 class="font-normal text-2xl text-white mb-5  lg:text-left">Company</h2>
                <ul class="flex flex-col lg:gap-3 text-white text-sm  lg:text-left">
                  <li>About us</li>
                  <li>Newsroom</li>
                  <li>Investors</li>
                  <li>BLog</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4 p-3">
                <h2 class="font-normal text-2xl text-white mb-5 ">Products</h2>
                <ul class="flex flex-col lg:gap-3 text-white text-sm ">
                  <li>Ride</li>
                  <li>Drive</li>
                  <li>Eat</li>
                  <li>BLog</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4 p-3">
                <h2 class="font-normal text-2xl text-white mb-5 ">Products</h2>
                <ul class="flex flex-col lg:gap-3 text-white text-sm ">
                  <li>Ride</li>
                  <li>Drive</li>
                  <li>Eat</li>
                  <li>BLog</li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-1/4 p-3">
                <h2 class="font-normal text-2xl text-white mb-5 ">Products</h2>
                <ul class="flex flex-col lg:gap-3 text-white text-sm ">
                  <li>Ride</li>
                  <li>Drive</li>
                  <li>Eat</li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col lg:flex-row justify-between px-10 py-6 border-b border-gray-700">
                <ul class="flex gap-3 justify-center lg:justify-start lg:gap-9 text-white text-2xl">
                  <li>
                    <a href="#"><Icon name="humbleicons:brand-facebook" /></a>
                  </li>
                  <li>
                    <a href="#"><Icon name="ant-design:twitter-outlined" /></a>
                  </li>
                  <li>
                    <a href="#"><Icon name="tdesign:logo-youtube" /></a>
                  </li>
                  <li>
                    <a href="#"></a><Icon name="lets-icons:insta-duotone-line" />
                  </li>
                </ul>
                <div class="flex gap-2 text-nowrap lg:gap-4 items-center text-white text-xs pt-3 lg:pt-0">
                  <p>Terms & Conditions</p>
                  <span class="w-1 h-1 rounded-full bg-white"></span>
                  <p>Privacy Policy </p>
                  <span class="w-1 h-1 rounded-full bg-white"></span>
                  <p>Payment Policy</p>
                </div>
            </div>

            <div>
              <div class="flex justify-between items-center lg:items-start py-2 px-10">
                <div>
                  <p class="text-xs lg:text-sm  text-slate-300 py-2">© 2024 TentoMart</p>
                </div>
                <div class="flex gap-4 text-slate-300 text-xs lg:text-sm ">
                  <p class="text-xs lg:text-sm  text-slate-300 py-2">Creative Tech Park</p>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </section>
  </footer>
</template>

<style scoped>

</style>