import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import InventoryPage from '@/pages/InventoryPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'MainPage',
    component: InventoryPage,
    props: (route) => ({ caseProp: route.query.case }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
