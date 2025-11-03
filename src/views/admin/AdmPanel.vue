<!--<template>
  <div class="admin-wrapper">
    //Sidebar
    <aside class="sidebar">
      <div class="logo">
        <h3>⚙️ Painel ADM</h3>
      </div>

      <nav class="menu">
        <ul>
          <li>
            <router-link to="/admin/equipments" class="menu-item">⚙️ Equipamentos</router-link>
          </li>
          <li>
            <router-link to="/admin/services" class="menu-item">🧰 Serviços</router-link>
          </li>
          <li>
            <router-link to="/admin/maintenance" class="menu-item">🧰 Manutenção</router-link>
          </li>
          <li>
            <router-link to="/admin/projects" class="menu-item">📁 Projetos</router-link>
          </li>
          <li>
            <router-link to="/admin/settings" class="menu-item">⚙️ Configurações</router-link>
          </li>
        </ul>
      </nav>

      <button class="logout-btn" @click="logout">Sair</button>
    </aside>

    //Main Content
    <main class="main-content">
      <header class="header">
        <h2>Bem-vindo, {{ usuario?.nome || usuario?.email }}</h2>
        <p class="subtitle">Área administrativa do sistema</p>
      </header>

      <section class="content-area">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdmPanel',
  data() {
    return {
      usuario: null,
    }
  },
  mounted() {
    // Pega os dados do usuário do localStorage
    const userData = localStorage.getItem('usuario')
    if (userData) {
      this.usuario = JSON.parse(userData)
    } else {
      // Se não houver usuário logado, redireciona para login
      this.$router.push('/login')
    }
  },
  methods: {
    logout() {
      // Limpa o localStorage e redireciona
      localStorage.removeItem('usuario')
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.admin-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: #f5f6fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background-color: #0d6efd;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.logo {
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
}

.menu {
  flex: 1;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu-item {
  display: block;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;
}

.menu-item:hover,
.menu-item.router-link-exact-active {
  background-color: #0a58ca;
}

.logout-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-btn:hover {
  background-color: #bb2d3b;
}

/* Main content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.header h2 {
  margin: 0;
  color: #0d47a1;
}

.subtitle {
  color: #666;
  font-size: 14px;
}

.content-area {
  flex: 1;
  padding: 30px;
  background-color: #f8f9fa;
}

/* Responsividade */
@media (max-width: 768px) {
  .admin-wrapper {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .menu ul {
    display: flex;
    gap: 10px;
  }

  .logout-btn {
    margin-top: 10px;
  }
}
</style>
-->

<template>
  <div class="admin-wrapper">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <h3>⚙️ Painel ADM</h3>
      </div>

      <nav class="menu">
        <ul>
          <li>
            <router-link to="/admin/equipments" class="menu-item">⚙️ Equipamentos</router-link>
          </li>
          <li>
            <router-link to="/admin/services" class="menu-item">🧰 Serviços</router-link>
          </li>
          <li>
            <router-link to="/admin/maintenance" class="menu-item">🔧 Manutenção</router-link>
          </li>
          <li>
            <router-link to="/admin/projects" class="menu-item">📁 Projetos</router-link>
          </li>
          <li>
            <router-link to="/admin/settings" class="menu-item">⚙️ Configurações</router-link>
          </li>
        </ul>
      </nav>

      <button class="logout-btn" @click="logout">Sair</button>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <header class="header">
        <h2>Bem-vindo, {{ usuario?.nome || usuario?.email }}</h2>
        <p class="subtitle">Área administrativa do sistema</p>
      </header>

      <section class="content-area">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup>
/*
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSession } from '../../composables/useSession'

const router = useRouter()
const { usuario, logout } = useSession()

onMounted(() => {
  // Se não houver usuário logado, redireciona para login
  if (!usuario.value) {
    router.push('/login')
  }
})
  */
 import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSession } from '../../composables/useSession'

const router = useRouter()
const { usuario, logout } = useSession()

onMounted(() => {
  if (!usuario.value) {
    router.push('/login')
  }
})
</script>

<style scoped>
.admin-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: #f5f6fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background-color: #0d6efd;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.logo {
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
}

.menu {
  flex: 1;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu-item {
  display: block;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s;
}

.menu-item:hover,
.menu-item.router-link-exact-active {
  background-color: #0a58ca;
}

.logout-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-btn:hover {
  background-color: #bb2d3b;
}

/* Main content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.header h2 {
  margin: 0;
  color: #0d47a1;
}

.subtitle {
  color: #666;
  font-size: 14px;
}

.content-area {
  flex: 1;
  padding: 30px;
  background-color: #f8f9fa;
}

/* Responsividade */
@media (max-width: 768px) {
  .admin-wrapper {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .menu ul {
    display: flex;
    gap: 10px;
  }

  .logout-btn {
    margin-top: 10px;
  }
}
</style>
