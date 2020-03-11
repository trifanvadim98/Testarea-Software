import Vue from "vue";
import Router from "vue-router";
import Main from "../views/Home";

Vue.use(Router);
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/",
        name: "home",
        component: Main
      },
      {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
      },
      {
        path: "/list",
        name: "list",
        component: () => import(/* webpackChunkName: "about" */ '../views/list.vue')
      }
    ]
});