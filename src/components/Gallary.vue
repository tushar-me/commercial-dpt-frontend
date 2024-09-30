
<template>
  
      <Swiper
        :style="{
              '--swiper-navigation-color': '#000',
              '--swiper-pagination-color': '#000',
            }"
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2"
    >
      <SwiperSlide  v-for="item in 4">
        <InnerImageZoom class="w-full h-auto" src="https://p.globalsources.com/IMAGES/PDT/B6028123321/Charger-USB-Car-Charger.jpg" zoomType="hover"/>
      </SwiperSlide>
    </Swiper>
    <Swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :modules="modules" 
        :slidesperView="4"
        class="mySwiper"
      >
        <SwiperSlide v-for="item in 4">
          <img class="h-20 w-20" src="https://p.globalsources.com/IMAGES/PDT/B6028123321/Charger-USB-Car-Charger.jpg">
        </SwiperSlide>

      </Swiper>
   
</template>

<script setup>
import { ref } from 'vue'
import '@websitebeaver/vue-magnifier/styles.css'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const modules  = [FreeMode, Navigation, Thumbs];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};


defineProps({
  images:{
    type:Array,
    required:true
  }
})
// const currentSlide = ref(0)
// const slideTo = (val)=> {
//     currentSlide.value = val
// }



</script>
