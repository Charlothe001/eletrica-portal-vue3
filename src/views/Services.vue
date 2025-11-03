<template>
  <Catalogo
    title="Nossos Serviços"
    :items="servicos"
    filter-label="Categoria"
    filter-field="category"
    search-placeholder="Buscar serviço..."
  />
</template>

<script setup>
import Catalogo from './Catalogo.vue'
import { useServices } from '../composables/useServices'

const { servicos } = useServices()
</script>
