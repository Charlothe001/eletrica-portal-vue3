<script>
export default{
  name: "Header"
}
</script>

<template>
  <div class="container pb-2">
    <img alt="Vue logo" class="logo pb-2" src="/public/img/raio-eletrico.jpg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style>

</style>