Perfeito! Aqui está o **código completo do cadastro** já pronto para salvar no `localStorage` e redirecionar para o login. Pode colar direto:

```vue
<template>
  <div class="register-wrapper">
    <div class="register-container">
      <h2>Criar Conta</h2>

      <form @submit.prevent="handleRegister">
        <!-- Nome -->
        <div class="input-group">
          <label for="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            v-model="nome"
            required
            placeholder="Seu nome completo"
            @focus="limparErro"
          />
        </div>

        <!-- CPF / CNPJ -->
        <div class="input-group">
          <label for="documento">CPF ou CNPJ</label>
          <input
            type="text"
            id="documento"
            v-model="documento"
            required
            placeholder="Digite seu CPF ou CNPJ"
            @input="formatarDocumento"
            maxlength="18"
            @focus="limparErro"
          />
        </div>

        <!-- E-mail -->
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

        <!-- Telefone -->
        <div class="input-group">
          <label for="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            v-model="telefone"
            placeholder="(00) 00000-0000"
            maxlength="15"
            @input="formatarTelefone"
            @focus="limparErro"
          />
        </div>

        <!-- CEP -->
        <div class="input-group">
          <label for="cep">CEP</label>
          <input
            type="text"
            id="cep"
            v-model="cep"
            required
            placeholder="00000-000"
            maxlength="9"
            @input="formatarCEP"
            @blur="buscarEndereco"
            @focus="limparErro"
          />
        </div>

        <!-- Endereço -->
        <div class="input-group">
          <label for="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            v-model="endereco"
            required
            placeholder="Rua, Avenida, etc."
          />
        </div>

        <!-- Número -->
        <div class="input-group">
          <label for="numero">Número</label>
          <input
            type="text"
            id="numero"
            v-model="numero"
            required
            placeholder="Número"
          />
        </div>

        <!-- Complemento -->
        <div class="input-group">
          <label for="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            v-model="complemento"
            placeholder="Apartamento, bloco, etc."
          />
        </div>

        <!-- Cidade -->
        <div class="input-group">
          <label for="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            v-model="cidade"
            required
            placeholder="Cidade"
          />
        </div>

        <!-- Senha -->
        <div class="input-group">
          <label for="senha">Senha</label>
          <input
            type="password"
            id="senha"
            v-model="senha"
            required
            placeholder="Crie uma senha"
            @focus="limparErro"
          />
        </div>

        <!-- Confirmar Senha -->
        <div class="input-group">
          <label for="confirmar">Confirmar Senha</label>
          <input
            type="password"
            id="confirmar"
            v-model="confirmarSenha"
            required
            placeholder="Repita a senha"
            @focus="limparErro"
          />
        </div>

        <!-- Mensagens -->
        <p v-if="erro" class="erro-msg">{{ erro }}</p>
        <p v-if="sucesso" class="sucesso-msg">{{ sucesso }}</p>

        <button class="register-btn" type="submit">Cadastrar</button>
      </form>

      <div class="footer">
        <p>Já tem uma conta? <router-link to="/login">Entrar</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cadastro',
  data() {
    return {
      nome: '',
      documento: '',
      email: '',
      telefone: '',
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      cidade: '',
      senha: '',
      confirmarSenha: '',
      erro: '',
      sucesso: ''
    }
  },
  methods: {
    handleRegister() {
      this.erro = ''
      this.sucesso = ''

      // Validações
      if (this.nome.trim().length < 3) {
        this.erro = 'O nome deve ter pelo menos 3 caracteres.'
        return
      }

      if (!this.validateEmail(this.email)) {
        this.erro = 'Por favor, insira um e-mail válido.'
        return
      }

      if (this.senha.length < 6) {
        this.erro = 'A senha deve ter pelo menos 6 caracteres.'
        return
      }

      if (this.senha !== this.confirmarSenha) {
        this.erro = 'As senhas não coincidem.'
        return
      }

      if (!this.documento || this.documento.length < 11) {
        this.erro = 'CPF ou CNPJ inválido.'
        return
      }

      if (!this.endereco || !this.cep) {
        this.erro = 'Informe o endereço e o CEP.'
        return
      }

      // Cria o objeto do usuário
      const novoUsuario = {
        nome: this.nome,
        documento: this.documento,
        email: this.email,
        telefone: this.telefone,
        cep: this.cep,
        endereco: this.endereco,
        numero: this.numero,
        complemento: this.complemento,
        cidade: this.cidade,
        senha: this.senha,
        tipo: 'admin' // ou 'usuario'
      }

      // Salvar no localStorage
      localStorage.setItem('usuario', JSON.stringify(novoUsuario))

      this.sucesso = 'Cadastro realizado com sucesso!'

      // Redirecionar para login
      setTimeout(() => {
        this.$router.push('/login')
      }, 1000)

      // Limpar campos
      Object.assign(this.$data, this.$options.data())
    },

    validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    },

    formatarTelefone() {
      this.telefone = this.telefone
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    },

    formatarCEP() {
      this.cep = this.cep
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    },

    async buscarEndereco() {
      const cepLimpo = this.cep.replace(/\D/g, '')
      if (cepLimpo.length === 8) {
        try {
          const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
          const dados = await resposta.json()
          if (!dados.erro) {
            this.endereco = dados.logradouro || ''
            this.cidade = dados.localidade || ''
          }
        } catch (e) {
          console.warn('Erro ao buscar CEP:', e)
        }
      }
    },

    formatarDocumento() {
      let doc = this.documento.replace(/\D/g, '')
      if (doc.length <= 11) {
        // CPF: 000.000.000-00
        doc = doc.replace(/(\d{3})(\d)/, '$1.$2')
        doc = doc.replace(/(\d{3})(\d)/, '$1.$2')
        doc = doc.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      } else {
        // CNPJ: 00.000.000/0000-00
        doc = doc.replace(/^(\d{2})(\d)/, '$1.$2')
        doc = doc.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        doc = doc.replace(/\.(\d{3})(\d)/, '.$1/$2')
        doc = doc.replace(/(\d{4})(\d)/, '$1-$2')
      }
      this.documento = doc
    },

    limparErro() {
      this.erro = ''
      this.sucesso = ''
    }
  }
}
</script>

<style scoped>
.register-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0d6efd, #e3f2fd, #ffffff);
  padding: 20px;
}

.register-container {
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 420px;
  animation: fadeIn 1s ease;
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #0d47a1;
}

.input-group {
  margin-bottom: 16px;
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

.register-btn {
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

.register-btn:hover {
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

.sucesso-msg {
  color: #0f5132;
  background-color: #d1e7dd;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  text-align: center;
}
</style>