import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import LoginPage from "@/pages/LoginPage.vue";
import MainPage from "@/pages/MainPage.vue";
import RulesPage from "@/pages/RulesPage.vue";
import WordPage from "@/pages/WordPage.vue";
import TrainingPage from "@/pages/TrainingPage.vue";
import router from "@/router/router.js";


createApp(App
//     ,{
//     components: {
//         'login-page': LoginPage,
//         'main-page': MainPage,
//         'rules-page': RulesPage,
//         'word-page': WordPage,
//         'training-page': TrainingPage
//     }
// }
)
    .use(router)
    .mount('#app')
