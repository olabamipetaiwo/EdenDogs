import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ViewDog from "@/views/ViewDog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dog/view/:breed/:id",
    name: "ViewDog",
    component: ViewDog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
