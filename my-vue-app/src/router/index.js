import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import LandingView from "../views/LandingView.vue";
// import App from "../views/App.vue";

const routes = [
  { path: "/", component: LandingView },
  { path: "/dashboard", component: DashboardView },
  { path: "/login", component: LoginView },
];

// const routes = [
//     {
//         path:'/',
//         name:'App',
//         component:App
//     },

// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
