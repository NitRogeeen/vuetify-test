import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./pages/Top";
import PageA from "./pages/PageA";
import HelloWorld from "./pages/HelloWorld";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Top },
  { path: "/hello", component: HelloWorld },
  { path: "/pagea", component: PageA }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
