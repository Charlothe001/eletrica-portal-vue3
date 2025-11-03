 /*
 import { ref, onMounted } from 'vue'

export function useServices() {
  const servicos = ref([])

  function recuperarServicos() {
    const data = localStorage.getItem('servicos')
    if (data) {
      const parsed = JSON.parse(data).map(s => ({
        title: s.titulo,
        desc: s.descricao,
        images: s.imagem ? [s.imagem] : [],
        category: 'Geral',
        link: '#'
      }))
      servicos.value = parsed
    }
  }

  onMounted(() => {
    recuperarServicos()
  })

  return { servicos, recuperarServicos }
}

*/


import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const usuario = ref(JSON.parse(localStorage.getItem('usuario')) || null)

export function useSession() {
  const router = useRouter()

  function login(dados) {
    usuario.value = dados
    localStorage.setItem('usuario', JSON.stringify(dados))
  }

  function logout() {
    usuario.value = null
    localStorage.removeItem('usuario')
    router.push('/login')
  }

  function isAuthenticated() {
    return !!usuario.value
  }

  return { usuario, login, logout, isAuthenticated }
}

export function useServices() {
  const servicos = ref([])

  function recuperarServicos() {
    const data = localStorage.getItem('servicos')
    if (data) {
      const parsed = JSON.parse(data).map(s => ({
        title: s.titulo,
        desc: s.descricao,
        images: s.imagem ? [s.imagem] : [],
        category: 'Geral',
        link: '#'
      }))
      servicos.value = parsed
    }
  }

  onMounted(recuperarServicos)

  return { servicos, recuperarServicos }
}
