<template>
  <Catalogo
    title="Projetos Realizados"
    :items="projetos"
    filter-label="Tipo"
    filter-field="type"
    search-placeholder="Buscar projeto..."
  />
</template>

<script setup>
import Catalogo from './Catalogo.vue';

const projetos = [
  {
    title: 'Projeto de Automação de Fábrica',
    desc: 'Integração completa de sistemas automatizados.',
    details: 'Controle de produção, sensores, atuadores e painéis inteligentes.',
    images: ['https://images.unsplash.com/photo-1616628186431-3c8d5f2b5f28?auto=format&fit=crop&w=600&q=80'],
    type: 'Automação',
    link: '/projetos/automacao-fabrica'
  },
  {
    title: 'Sistema de Iluminação Inteligente',
    desc: 'Controle de iluminação eficiente e moderno.',
    images: ['https://images.unsplash.com/photo-1616628186475-5a7c667c3d6d?auto=format&fit=crop&w=600&q=81'],
    type: 'Iluminação',
    link: '/projetos/iluminacao'
  }
];
</script>
