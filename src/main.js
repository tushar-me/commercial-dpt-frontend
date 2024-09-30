import './assets/css/main.css'
import AppLayout from "@/components/Layouts/AppLayout.vue";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Icon from "@/components/Icon.vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('AppLayout', AppLayout)
app.component('Icon', Icon)
app.mount('#app')
