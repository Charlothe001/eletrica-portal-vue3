import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const usuario = ref(JSON.parse(localStorage.getItem('usuario')) || null)

export function useSession() {
  const router = useRouter()

  const isAuthenticated = computed(() => usuario.value !== null)

  function login(email) {
    usuario.value = { email }
    localStorage.setItem('usuario', JSON.stringify(usuario.value))
  }

  function logout() {
    usuario.value = null
    localStorage.removeItem('usuario')
    router.push('/')
  }

  return {
    usuario,
    isAuthenticated,
    login,
    logout
  }
}
