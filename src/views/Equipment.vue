<template>
  <Catalogo
    title="Nosso Catálogo de Equipamentos"
    :items="equipments"
    filter-label="Categoria"
    filter-field="category"
    search-placeholder="Buscar equipamento..."
  />
</template>

<script setup>
import Catalogo from './Catalogo.vue';
import { useEquipments } from '../composables/useEquipments'

const { equipments } = useEquipments()

</script>
