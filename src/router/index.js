import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ExploreView from "../views/ExploreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      alias: ["/"],
      name: "home",
      component: HomeView,
    },
    {
      path: "/explore",
      name: "explore",
      component: () => import("../views/ExploreView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    // {
    //   path: "*",
    //   name: "home",
    //   component: HomeView,
    // },
  ],
});

export default router;
