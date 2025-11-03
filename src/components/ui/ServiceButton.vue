<script>
  export default{
    name:'ServiceButton'
  }
</script>

<template>
<section class="cta text-center bg-primary text-white py-5">
  <div class="container">
    <h3 class="fw-bold mb-4">Explore nossas áreas de atuação</h3>
    <div class="btn-group flex-wrap">
      <router-link to="/equipments" class="btn btn-outline-light m-2 px-4">Equipamentos</router-link>
      <router-link to="/services" class="btn btn-outline-light m-2 px-4">Serviços</router-link>
      <router-link to="/maintenance" class="btn btn-outline-light m-2 px-4">Manutenção</router-link>
      <router-link to="/projects" class="btn btn-outline-light m-2 px-4">Projetos</router-link>
    </div>
  </div>
</section>

</template>

<style>

</style>