<template>
  <Catalogo
    title="Serviços de Manutenção"
    :items="manutencao"
    filter-label="Tipo"
    filter-field="type"
    search-placeholder="Buscar manutenção..."
  />
</template>

<script setup>
import Catalogo from './Catalogo.vue';

const manutencao = [
  {
    title: 'Manutenção Preventiva',
    desc: 'Evite falhas com inspeções periódicas.',
    details: 'Análises detalhadas, substituição de peças e ajustes.',
    images: ['https://images.unsplash.com/photo-1616401783532-0d3b1f9d8a12?auto=format&fit=crop&w=600&q=80'],
    type: 'Preventiva',
    link: '/manutencao/preventiva'
  },
  {
    title: 'Manutenção Corretiva',
    desc: 'Correção rápida de falhas e problemas elétricos.',
    images: ['https://images.unsplash.com/photo-1616628186475-5a7c667c3d6d?auto=format&fit=crop&w=600&q=80'],
    type: 'Corretiva',
    link: '/manutencao/corretiva'
  },
  {
    title: 'Manutenção Preditiva',
    desc: 'Baseada em monitoramento e análise de dados para antecipar falhas.',
    details: 'Utiliza sensores, indicadores e análise de desempenho para manutenção inteligente.',
    image: 'https://images.unsplash.com/photo-1581092335592-1a0c2e7c8d4c?auto=format&fit=crop&w=600&q=80',
    type: 'Preditiva',
    link: '/manutencao/preditiva'
  }
];
</script>

  
