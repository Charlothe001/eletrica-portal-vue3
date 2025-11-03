import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthenticatedAdmUser from '../views/admin/AdmPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/cadastrologin',
      name: 'cadastrologin',
      component: () => import('../views/UserRegistration.vue'),
    },
    {
      path: '/equipments',
      name: 'equipments',
      component: () => import('../views/Equipment.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue'),
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: () => import('../views/Maintenance.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
    },
    {
      path: '/authenticateduser',
      name: 'authenticateduser',
      component: () => import('../views/admin/AdmPanel.vue'),
    },
    {
      path: '/admin',
      component: AuthenticatedAdmUser,
      children: [
        { path: '', redirect: '/admin/equipment' },
        { path: 'equipments', component: () => import('../views/admin/Equipment.vue') },
        { path: 'services', component: () => import('../views/admin/Services.vue') },
        /*{ path: 'maintenance', component: () => import('../views/admin/Maintenance.vue') },
        { path: 'projects', component: () => import('../views/admin/Projects.vue') },
        { path: 'settings', component: () => import('../views/admin/Settings.vue') }*/
      ],
    },
  ],
})

// Guard global para rotas administrativas
router.beforeEach((to, from, next) => {
  const usuario = JSON.parse(localStorage.getItem('usuario'))

  // Rotas que começam com /admin precisam de login
  if (to.path.startsWith('/admin') && !usuario) {
    next('/login')
  } else {
    next()
  }
})
export default router