import HomePage from "../pages/IndexPage.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/:catchAll(.*)*",
    component: NotFound,
  },
];

export default routes;
