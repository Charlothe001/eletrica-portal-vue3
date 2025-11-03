<template>
  <div class="servicos-admin">
    <div class="header">
      <h3>🧰 Gerenciar Equipamentos</h3>
      <button class="btn btn-primary" @click="abrirModalAdicionar">
        + Adicionar Item
      </button>
    </div>

    <!-- Campo de busca -->
    <div class="search-box mt-3">
      <input
        type="text"
        class="form-control"
        v-model="busca"
        placeholder="🔍 Procurar serviço..."
      />
    </div>

    <!-- Tabela de serviços -->
    <div v-if="equipamentosFiltrados.length" class="table-responsive mt-4">
      <table class="table align-middle custom-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Imagem</th>
            <th>Descrição</th>
            <th class="text-center" style="width: 120px;">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(servico, index) in equipamentosFiltrados"
            :key="index"
            class="table-row"
          >
            <td>{{ servico.titulo }}</td>
            <td>
              <img
                v-if="servico.imagem"
                :src="servico.imagem"
                alt="Imagem do serviço"
                class="thumb"
              />
            </td>
            <td>{{ servico.descricao }}</td>
            <td class="text-center actions">
              <button
                class="btn-action edit"
                title="Editar serviço"
                @click="editarEquipamento(index)"
              >
                ✏️
              </button>
              <button
                class="btn-action delete"
                title="Excluir serviço"
                @click="deletarEquipamento(index)"
              >
                🗑️
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="text-center mt-4 text-muted">Nenhum item encontrado.</p>

    <!-- Modal -->
    <div v-if="modalAberto" class="modal-backdrop">
      <div class="modal-container">
        <h4>{{ editando !== null ? 'Editar Serviço' : 'Novo Serviço' }}</h4>

        <form @submit.prevent="salvarEquipamento">
          <div class="mb-3">
            <label class="form-label">Título</label>
            <input type="text" class="form-control" v-model="form.titulo" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Descrição</label>
            <textarea
              class="form-control"
              v-model="form.descricao"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Imagem</label>
            <input
              type="file"
              class="form-control"
              @change="onFileChange"
              accept="image/*"
            />
            <img
              v-if="form.imagem"
              :src="form.imagem"
              class="preview"
              alt="Prévia da imagem"
            />
          </div>

          <div class="buttons">
            <button type="submit" class="btn btn-success">💾 Salvar</button>
            <button type="button" class="btn btn-secondary" @click="fecharModal">
              ❌ Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const equipamentos = ref([])
const busca = ref('')
const modalAberto = ref(false)
const editando = ref(null)

const form = ref({
  titulo: '',
  descricao: '',
  imagem: ''
})

onMounted(() => {
  const armazenados = localStorage.getItem('equipamentos')
  if (armazenados) equipamentos.value = JSON.parse(armazenados)
})

function abrirModalAdicionar() {
  limparFormulario()
  editando.value = null
  modalAberto.value = true
}

function editarEquipamento(index) {
  form.value = { ...equipamentos.value[index] }
  editando.value = index
  modalAberto.value = true
}

function salvarEquipamento() {
  if (!form.value.titulo || !form.value.descricao) return

  if (editando.value !== null) {
    equipamentos.value[editando.value] = { ...form.value }
  } else {
    equipamentos.value.push({ ...form.value })
  }

  salvarLocal()
  fecharModal()
}

function deletarEquipamento(index) {
  if (confirm('Tem certeza que deseja deletar este equipamento?')) {
    equipamentos.value.splice(index, 1)
    salvarLocal()
  }
}

function salvarLocal() {
  localStorage.setItem('equipamentos', JSON.stringify(equipamentos.value))
}

function fecharModal() {
  modalAberto.value = false
  limparFormulario()
}

function limparFormulario() {
  form.value = { titulo: '', descricao: '', imagem: '' }
}

function onFileChange(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (event) => {
      form.value.imagem = event.target.result
    }
    reader.readAsDataURL(file)
  }
}

const equipamentosFiltrados = computed(() => {
  if (!busca.value) return equipamentos.value
  return equipamentos.value.filter((s) =>
    s.titulo.toLowerCase().includes(busca.value.toLowerCase())
  )
})
</script>

<style scoped>
.servicos-admin {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.thumb {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

/* 🔵 Tabela estilizada */
.custom-table tbody tr {
  transition: background-color 0.2s ease;
}

.custom-table tbody tr:hover {
  background-color: #f1f8ff;
}

/* 🔵 Botões de ação escondidos até hover */
.actions {
  position: relative;
}

.btn-action {
  background: transparent;
  border: none;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.2s ease;
  margin: 0 4px;
  font-size: 18px;
  cursor: pointer;
}

.table-row:hover .btn-action {
  opacity: 1;
  transform: scale(1.1);
}

.btn-action.edit:hover {
  color: #ffc107;
}

.btn-action.delete:hover {
  color: #dc3545;
}

/* 🔵 Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
}

.preview {
  width: 100%;
  max-height: 200px;
  margin-top: 10px;
  border-radius: 8px;
  object-fit: cover;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
