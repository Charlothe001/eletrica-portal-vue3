import { ref, onMounted } from 'vue'

export function useEquipments() {
  const equipments = ref([])

  function salvarEquipamentos() {
    localStorage.setItem('equipamentos', JSON.stringify(equipments.value))
  }

  function recuperarEquipamentos() {
    const data = localStorage.getItem('equipamentos')
    if (data) {
      // converte campos do admin para o formato do catálogo
      const parsed = JSON.parse(data).map(s => ({
        title: s.titulo,
        desc: s.descricao,
        images: s.imagem ? [s.imagem] : [],
        category: 'Geral', // se quiser adicionar categorias futuramente
        link: '#'
      }))
      equipments.value = parsed
    }
  }

  onMounted(() => {
    recuperarEquipamentos()
  })

  return { equipments, salvarEquipamentos, recuperarEquipamentos }
}
