import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import MainPage from "@/pages/MainPage.vue";
import RulesPage from "@/pages/RulesPage.vue";
import WordPage from "@/pages/WordPage.vue";
import TrainingPage from "@/pages/TrainingPage.vue";
import MyProfilePage from "@/pages/MyProfilePage.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage },
    { path: '/rules', component: RulesPage },
    { path: '/profile', component: MyProfilePage },
    { path: '/training', component: TrainingPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
