import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import List from "../views/List.vue";
import Add from "../views/Add.vue";
import Edit from "../views/Edit.vue";
import Detail from "../views/Detail.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "categories", component: List, name: "category-list" },
        { path: "categories/add", component: Add, name: "category-add" },
        { path: "categories/edit/:id", component: Edit, name: "category-edit" },
        { path: "categories/detail/:id", component: Detail, name: "category-detail" },
      ],
    },
  ],
  history: createWebHistory(),
});

export default router;
