import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { ref } from "vue";
import { saveScrollPosition } from "@/scrollManager";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      alias: ["/"],
      name: "home",
      component: HomeView,
      meta: { saveScrollPosition: true },
    },
    {
      path: "/explore",
      name: "explore",
      component: () => import("../views/ExploreView.vue"),
    },
    {
      path: "/favourites",
      name: "favourites",
      component: () => import("../views/FavouritesView.vue"),
      meta: { saveScrollPosition: true },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
});

router.beforeEach((to, from, next) => {
  setTimeout(() => {
    if (from.meta.saveScrollPosition) {
      saveScrollPosition(from.path, window.scrollY);
    }
    next();
  }, 0);
});

// router.beforeEach((to, from, next) => {
//   setTimeout(() => {
//     console.log(`going to ${to.name}`);
//     next();
//   }, 0);
// });

export default router;
