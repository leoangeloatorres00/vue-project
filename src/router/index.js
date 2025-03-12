import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/home.vue";
import About from "@/views/about.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/about",
    component: About,
  },
];

export default new Router({
  mode: "history",
  routes,
});
