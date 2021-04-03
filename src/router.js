import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

Vue.use(VueRouter);

const routes = [
  { path : "/", component :  Home},
  { path : "/:id", component : ProductDetail },
  { path : "*", redirect : "/"}
];

const router = new VueRouter({
  mode : "history",
  routes,
});


export default router;
