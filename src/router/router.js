import Vue from "vue";
import Router from "vue-router";
import Home from "../components/HelloWorld";
// import List from "@/views/list";
import List from "../views/list.vue";

Vue.use(Router);
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
      },
      {
        path: "/list",
        name: "list",
        component: List
      }
    ]
});