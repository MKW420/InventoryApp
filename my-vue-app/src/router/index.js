import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import LandingView from "../views/LandingView.vue";
import CategorySelectionView from "../views/CategorySelectionView.vue"
import ProductView from "../views/ProductView.vue"
// import App from "../views/App.vue";

const routes = [
  { path: "/", component: LandingView },
  { path: "/dashboard", component: DashboardView },
  { path: "/login", component: LoginView },
  { path: "/CategorySelection", component: CategorySelectionView },
  { path: "/Products", component: ProductView },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
