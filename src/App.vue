<script setup>
//importação dos elementos vue-router
import { RouterLink, RouterView } from 'vue-router';

//importação do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar componente de navegação
import BarraNavegacao from './componentes/BarraNavegacao.vue';
</script>


<template>
  <body>
    <!-- Barra de navegação -->
    <BarraNavegacao />

    <!-- Visualizar conteúdos -->
    <RouterView />
  </body>
</template>

