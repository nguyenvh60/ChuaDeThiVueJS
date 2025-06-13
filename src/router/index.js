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
        { path: "students", component: List, name: "student-list" },
        { path: "students/add", component: Add, name: "student-add" },
        { path: "students/edit/:id", component: Edit, name: "student-edit" },
        { path: "students/detail/:id", component: Detail, name: "student-detail" },
      ],
    },
  ],
  history: createWebHistory(),
});

export default router;
