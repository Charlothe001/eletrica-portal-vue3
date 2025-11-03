<!--
<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h2>Entrar na Conta</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="seuemail@exemplo.com"
            @focus="limparErro"
          />
        </div>

        <div class="input-group">
          <label for="senha">Senha</label>
          <input
            type="password"
            id="senha"
            v-model="senha"
            required
            placeholder="Digite sua senha"
            @focus="limparErro"
          />
        </div>

        <p v-if="erro" class="erro-msg">{{ erro }}</p>

        <button class="login-btn" type="submit">Login</button>
      </form>

      <div class="footer">
        <p>Não tem uma conta? <router-link to="/cadastrologin">Cadastrar</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      senha: '',
      erro: ''
    }
  },
  methods: {
    handleLogin() {
      this.erro = ''

      if (!this.validateEmail(this.email)) {
        this.erro = 'Por favor, insira um e-mail válido.'
        return
      }

      if (this.senha.length < 6) {
        this.erro = 'A senha deve ter pelo menos 6 caracteres.'
        return
      }

      // Lógica de login (simulada)
      console.log('Email:', this.email)
      console.log('Senha:', this.senha)
      alert('Login realizado com sucesso!')
    },
    validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    },
    limparErro() {
      this.erro = ''
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  /* 🔵 Novo degradê azul → branco */
  background: linear-gradient(135deg, #007bff, #e3f2fd, #ffffff);
  padding: 20px;
}

.login-container {
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  animation: fadeIn 1s ease;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #0d47a1;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border 0.3s;
}

.input-group input:focus {
  border-color: #0d6efd;
  outline: none;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #0a58ca;
}

.erro-msg {
  color: #e53e3e;
  background-color: #fed7d7;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  text-align: center;
}

.footer {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #777;
}

.footer a {
  color: #0d6efd;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 500px) {
  .login-container {
    padding: 30px 20px;
  }
}
</style>


<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h2>Entrar na Conta</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="seuemail@exemplo.com"
            @focus="limparErro"
          />
        </div>

        <div class="input-group">
          <label for="senha">Senha</label>
          <input
            type="password"
            id="senha"
            v-model="senha"
            required
            placeholder="Digite sua senha"
            @focus="limparErro"
          />
        </div>

        <p v-if="erro" class="erro-msg">{{ erro }}</p>

        <button class="login-btn" type="submit">Login</button>
      </form>

      <div class="footer">
        <p>Não tem uma conta? <router-link to="/cadastrologin">Cadastrar</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const senha = ref('')
const erro = ref('')

const router = useRouter()

const limparErro = () => {
  erro.value = ''
}

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const handleLogin = () => {
  erro.value = ''

  if (!validateEmail(email.value)) {
    erro.value = 'Por favor, insira um e-mail válido.'
    return
  }

  if (senha.value.length < 6) {
    erro.value = 'A senha deve ter pelo menos 6 caracteres.'
    return
  }

  // Simulação de login bem-sucedido
  const usuario = { email: email.value } // aqui você poderia colocar mais info
  localStorage.setItem('usuario', JSON.stringify(usuario))

  // Redireciona para painel ADM
  router.push('/admin')
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #007bff, #e3f2fd, #ffffff);
  padding: 20px;
}

.login-container {
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  animation: fadeIn 1s ease;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #0d47a1;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border 0.3s;
}

.input-group input:focus {
  border-color: #0d6efd;
  outline: none;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #0a58ca;
}

.erro-msg {
  color: #e53e3e;
  background-color: #fed7d7;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  text-align: center;
}

.footer {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #777;
}

.footer a {
  color: #0d6efd;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 500px) {
  .login-container {
    padding: 30px 20px;
  }
}
</style>
-->

<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h2>Entrar na Conta</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="seuemail@exemplo.com"
            @focus="erro = ''"
          />
        </div>

        <div class="input-group">
          <label for="senha">Senha</label>
          <input
            type="password"
            id="senha"
            v-model="senha"
            required
            placeholder="Digite sua senha"
            @focus="erro = ''"
          />
        </div>

        <p v-if="erro" class="erro-msg">{{ erro }}</p>

        <button class="login-btn" type="submit">Login</button>
      </form>

      <div class="footer">
        <p>Não tem uma conta? <router-link to="/cadastrologin">Cadastrar</router-link></p>
      </div>
    </div>
  </div>
</template>

<!--
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSession } from '../composables/useSession'

const email = ref('')
const senha = ref('')
const erro = ref('')

const router = useRouter()
const { login } = useSession()

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const handleLogin = () => {
  erro.value = ''

  if (!validateEmail(email.value)) {
    erro.value = 'Por favor, insira um e-mail válido.'
    return
  }

  if (senha.value.length < 6) {
    erro.value = 'A senha deve ter pelo menos 6 caracteres.'
    return
  }

  // ✅ Login bem-sucedido
  login(email.value)

  // Redireciona ao painel do ADM
  router.push('/admin')
}
</script>
-->

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSession } from '../composables/useSession'

const router = useRouter()
const { login } = useSession()

const email = ref('')
const senha = ref('')
const erro = ref('')

function handleLogin() {
  erro.value = ''

  if (!email.value.includes('@')) {
    erro.value = 'Por favor, insira um e-mail válido.'
    return
  }

  if (senha.value.length < 6) {
    erro.value = 'A senha deve ter pelo menos 6 caracteres.'
    return
  }

  // Simula login bem-sucedido
  const usuario = { email: email.value, nome: 'Administrador' }

  login(usuario)
  router.push('/admin')
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #007bff, #e3f2fd, #ffffff);
  padding: 20px;
}

.login-container {
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  animation: fadeIn 1s ease;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #0d47a1;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border 0.3s;
}

.input-group input:focus {
  border-color: #0d6efd;
  outline: none;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #0a58ca;
}

.erro-msg {
  color: #e53e3e;
  background-color: #fed7d7;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  text-align: center;
}

.footer {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #777;
}

.footer a {
  color: #0d6efd;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 500px) {
  .login-container {
    padding: 30px 20px;
  }
}
</style>