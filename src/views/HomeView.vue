<template>
  
  <div class="home">
    <!-- HERO SECTION -->
    <section class="hero d-flex flex-column justify-content-center align-items-center text-white text-center py-5">
      <div class="container">
        <h1 class="display-5 fw-bold mb-3">
          39 Anos de excelência em Soluções Elétricas e Automação
        </h1>
        <p class="lead mb-4">
          Compromisso, qualidade e inovação em cada projeto elétrico que realizamos.
        </p>
        <router-link to="/projetos" class="btn btn-light btn-lg fw-semibold shadow-sm">
          Conheça Nossos Projetos
        </router-link>
      </div>
    </section>

    <!-- SOBRE NÓS -->
    <section class="about bg-light text-dark py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1581090467550-6a5c8a76f51e?auto=format&fit=crop&w=800&q=80"
              alt="Equipe elétrica"
              class="img-fluid rounded shadow-sm"
            />
          </div>
          <div class="col-md-6">
            <h2 class="text-primary fw-bold mb-3">Sobre a Empresa</h2>
            <p class="fs-5">
              Há quase quatro décadas, a <strong>Costa Simões</strong> é referência em
              montagem, manutenção e instalação de sistemas elétricos de alta performance.
              Oferecemos soluções sob medida, com foco em automação industrial e infraestrutura elétrica.
            </p>
            <p class="fs-6 text-muted">
              Nosso compromisso é com a qualidade, segurança e inovação — entregando
              resultados sólidos e duradouros para cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVIÇOS -->
    <section class="services py-5">
      <div class="container text-center">
        <h2 class="text-primary fw-bold mb-5">Nossos Serviços</h2>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3" v-for="(service, index) in services" :key="index">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <div class="icon mb-3 text-primary fs-1">
                  <i :class="service.icon"></i>
                </div>
                <h5 class="card-title fw-bold">{{ service.title }}</h5>
                <p class="card-text text-muted small">{{ service.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Quadros Elétricos',
    desc: 'Montagem e manutenção de quadros elétricos de força e comando.',
    icon: 'bi bi-lightning-charge-fill'
  },
  {
    title: 'Equipamentos Elétricos',
    desc: 'Venda de componentes e dispositivos de alta performance.',
    icon: 'bi bi-tools'
  },
  {
    title: 'Sistemas de Automação',
    desc: 'Instalação e integração de sistemas automatizados.',
    icon: 'bi bi-cpu'
  },
    {
    title: 'Consultoria Técnica',
    desc: 'Soluções personalizadas para projetos elétricos complexos.',
    icon: 'bi bi-diagram-3-fill'
  }
]
</script>

<style scoped>
/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
  min-height: 60vh;
}

/* Card hover */
.card:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #0a58ca, #0d6efd);
}

.btn-outline-light:hover {
  background-color: #fff;
  color: #0d6efd;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 1.8rem;
  }
}
</style>