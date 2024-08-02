import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import LoginPage from "@/pages/LoginPage.vue";
import MainPage from "@/pages/MainPage.vue";
import RulesPage from "@/pages/RulesPage.vue";
import WordPage from "@/pages/WordPage.vue";
import TrainingPage from "@/pages/TrainingPage.vue";
import router from "@/router/router.js";
import store from "@/vuex/store.js";
import ToastPlugin from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-bootstrap.css';

createApp(App)
    .use(router)
    .use(store)
    .use(ToastPlugin)
    .mount('#app')
