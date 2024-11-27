import Geracao1 from '@/paginas/Geracao1.vue';
import Geracao2 from '@/paginas/Geracao2.vue';
import Geracao3 from '@/paginas/Geracao3.vue';
import Geracao4 from '@/paginas/Geracao4.vue';
import Geracao5 from '@/paginas/Geracao5.vue';
import Geracao6 from '@/paginas/Geracao6.vue';



import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'geracao1',
      component: Geracao1,
    },
    {
      path: '/geracao2',
      name: 'geracao2',
      component: Geracao2,
    },
    {
      path: '/geracao3',
      name: 'geracao3',
      component: Geracao3,
    },
    {
      path: '/geracao4',
      name: 'geracao4',
      component: Geracao4,
    },
    {
      path: '/geracao5',
      name: 'geracao5',
      component: Geracao5,
    },
    {
      path: '/geracao6',
      name: 'geracao6',
      component: Geracao6,
    },
  ],
});

export default router;
