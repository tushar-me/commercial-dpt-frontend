
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import AppLayout from '@/components/Layouts/AppLayout.vue';
// import DashboardLayout from '@/components/Layouts/DashboardLayout.vue';
// import  VSelect  from "vue-select";
import "vue-select/dist/vue-select.css";

import '../../node_modules/flowbite-vue/dist/index.css'
// import App from './App.vue'
// import router from './router/index.js'
// import  Icon  from '@/components/Icon.vue';



const counter = createApp(App)
counter.use(createPinia())
    .use(router)
    .component('AppLayout', AppLayout)
    .component('DashboardLayout', DashboardLayout)
    .component("Select", VSelect)
    .component('Icon', Icon)
    .mount('#counter')

