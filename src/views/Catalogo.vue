<template>
  <div class="catalogo-geral">

    <!-- FILTROS E BUSCA -->
    <section v-if="filterable" class="filters bg-light py-4">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          <label class="form-label fw-bold me-2">Filtrar por {{ filterLabel }}:</label>
          <select class="form-select d-inline-block w-auto" v-model="selectedFilter">
            <option :value="allOption">{{ allOption }}</option>
            <option v-for="opt in filterOptions" :key="opt" :value="opt">{{ opt }}</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            class="form-control"
            :placeholder="searchPlaceholder"
            v-model="searchQuery"
          />
        </div>
      </div>
    </section>

    <!-- CATÁLOGO DE ITENS -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-primary fw-bold mb-5 text-center">{{ title }}</h2>
        <div class="row g-4">
          <div
            class="col-md-6 col-lg-4"
            v-for="(item, index) in filteredItems"
            :key="index"
          >
            <div class="card border-0 shadow-sm h-100 hover-pointer" @click="openModal(item)">
              <img :src="item.image || item.images?.[0]" class="card-img-top" :alt="item.title" />
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ item.title }}</h5>
                <p class="card-text text-muted small">{{ item.desc }}</p>
                <span class="badge bg-primary">{{ item.category || item.type }}</span>
              </div>
            </div>
          </div>
          <div v-if="filteredItems.length === 0" class="text-center text-muted mt-5">
            Nenhum item encontrado.
          </div>
        </div>
      </div>
    </section>

    <!-- MODAL -->
    <div
      class="modal fade"
      tabindex="-1"
      :class="{ show: showModal }"
      :style="{ display: showModal ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.5)' }"
      @click.self="closeModal"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedItem.title }}</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedItem.images?.length > 1" id="carouselItem" class="carousel slide mb-3" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div
                  class="carousel-item"
                  v-for="(img, idx) in selectedItem.images"
                  :key="idx"
                  :class="{ active: idx === 0 }"
                >
                  <img :src="img" class="d-block w-100 rounded" :alt="selectedItem.title" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselItem" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselItem" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
              </button>
            </div>

            <img v-else :src="selectedItem.image || selectedItem.images?.[0]" class="d-block w-100 rounded mb-3" :alt="selectedItem.title" />

            <p>{{ selectedItem.desc }}</p>
            <p v-if="selectedItem.details"><strong>Detalhes:</strong> {{ selectedItem.details }}</p>
            <p v-if="selectedItem.category"><strong>Categoria:</strong> {{ selectedItem.category }}</p>
            <p v-if="selectedItem.type"><strong>Tipo:</strong> {{ selectedItem.type }}</p>
          </div>
          <div class="modal-footer">
            <router-link v-if="selectedItem.link" :to="selectedItem.link" class="btn btn-primary">Ver Detalhes</router-link>
            <button type="button" class="btn btn-secondary" @click="closeModal">Fechar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  filterable: { type: Boolean, default: true },
  filterLabel: { type: String, default: 'Categoria' },
  filterField: { type: String, default: 'category' }, // ou 'type'
  searchPlaceholder: { type: String, default: 'Buscar...' },
  allOption: { type: String, default: 'Todos' }
});

const selectedFilter = ref(props.allOption);
const searchQuery = ref('');
const showModal = ref(false);
const selectedItem = ref({});

// opções de filtro dinâmicas
const filterOptions = computed(() => {
  return [...new Set(props.items.map(item => item[props.filterField]))];
});

// filtro e busca
const filteredItems = computed(() => {
  return props.items.filter(item => {
    const matchFilter = selectedFilter.value === props.allOption || item[props.filterField] === selectedFilter.value;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchFilter && matchSearch;
  });
});

function openModal(item) {
  selectedItem.value = item;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<style scoped>
.card img {
  height: 200px;
  object-fit: cover;
}

.hover-pointer {
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
}

.filters select,
.filters input {
  max-width: 300px;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
}

.modal-content {
  border-radius: 0.5rem;
}
</style>
