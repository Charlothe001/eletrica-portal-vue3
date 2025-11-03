// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: () => import('../views/Login.vue') },
    { path: '/cadastrologin', name: 'cadastrologin', component: () => import('../views/UserRegistration.vue') },
    {path: '/equipments', name: 'equipments', component: () => import('../views/Equipment.vue') },
    { path: '/services', name: 'services', component: () => import('../views/Services.vue') },
    { path: '/maintenance', name: 'maintenance', component: () => import('../views/Maintenance.vue') },
    { path: '/projects', name: 'projects', component: () => import('../views/Projects.vue') },
    {
      path: '/admin',
      component: () => import('../views/admin/AdmPanel.vue'),
      children: [
        { path: '', redirect: '/admin/services' },
        { path: 'services', component: () => import('../views/admin/Services.vue') },
        { path: 'equipments', component: () => import('../views/admin/Equipment.vue') },
      ],
      meta: { requiresAuth: true }, // 🔒 flag que indica rota protegida
    },
  ],
})


// 🧩 Middleware global de autenticação
router.beforeEach((to, _from, next) => {
  const usuario = JSON.parse(localStorage.getItem('usuario'))

  // 🚫 Caso não esteja logado e tente acessar o painel admin
  if (to.meta.requiresAuth && !usuario) {
    next('/') // 🔄 Redireciona para a Home
  }
  // ✅ Se já estiver logado, bloqueia login/cadastro
  else if ((to.path === '/login' || to.path === '/cadastrologin') && usuario) {
    next('/admin')
  }
  // ✅ Permite navegação normal
  else {
    next()
  }
})

export default router
