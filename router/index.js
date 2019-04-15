import Vue from "vue";
import Router from "vue-router";

import Home from "../src/views/Home";
import CodeExamples from "../src/views/CodeExamples";
import MyFavorites from "../src/views/MyFavorites";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/code-examples",
      name: "code-examples",
      component: CodeExamples
    },
    {
      path: "/my-favorites",
      name: "my-favorites",
      component: MyFavorites
    }
  ]
});
