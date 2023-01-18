import { createRouter, createWebHistory } from "vue-router";

import HomeComp from "./pages/HomeComp.vue";
import ProjectsListComp from "./pages/ProjectsListComp.vue";
import AboutUsComp from "./pages/AboutUsComp.vue";
import ProjectComp from "./pages/ProjectComp.vue";
import ContactsComp from "./pages/ContactsComp.vue";
import NotFoundComp from "./pages/NotFoundComp.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeComp,
    },
    {
      path: "/about",
      name: "about",
      component: AboutUsComp,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsListComp,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactsComp,
    },
    {
      path: "/projects/:slug",
      name: "project",
      component: ProjectComp,
    },
    {
      path: "/*",
      name: "not-found",
      component: NotFoundComp,
    },
  ],
});

export { router };
