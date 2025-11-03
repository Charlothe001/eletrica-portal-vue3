<script>
  export default{
    name:"Footer"
  }
</script>

  <template>
  <footer class="footer text-white pt-5 pb-3">
    <div class="container">
      <div class="row gy-4">
        
        <!-- Coluna 1 - Informações da empresa -->
        <div class="col-md-6 col-lg-4">
          <h5 class="fw-bold mb-3">Costa Simões</h5>
          <p class="small text-light opacity-75">
            Soluções completas em automação e sistemas elétricos há mais de 39 anos.  
            Excelência, segurança e tecnologia a serviço da sua empresa.
          </p>
        </div>

        <!-- Coluna 2 - Contatos -->
        <div class="col-md-6 col-lg-4">
          <h5 class="fw-bold mb-3">Contato</h5>
          <ul class="list-unstyled small">
            <li class="mb-2">
              <i class="bi bi-envelope-fill text-light me-2"></i>
              <a href="mailto:contato@empresa.com.br" class="text-white text-decoration-none">
                Costasimoes@costasimoes.com
              </a>
            </li>
            <li class="mb-2">
              <i class="bi bi-telephone-fill text-light me-2"></i>
              <a href="tel:+5511999999999" class="text-white text-decoration-none">
                (21) 3351-9160 / (21) 99820-1499
              </a>
            </li>
            <li class="mb-2 d-flex align-items-center">
              <i class="bi bi-geo-alt-fill text-light me-2"></i>
                Rua Ibicuí, 253 – Brás de Pina / Rio de Janeiro - RJ, 21215-240
            </li>
          </ul>
        </div>

        <!-- Coluna 3 - Desenvolvedor -->
        <div class="col-md-12 col-lg-4 text-center text-lg-start">
          <h5 class="fw-bold mb-3">Desenvolvido por</h5>
          <div class="d-flex align-items-center justify-content-lg-start justify-content-center">
            <a href="https://www.seusite.com.br" target="_blank" class="d-flex align-items-center text-decoration-none">
              <img
                src="/public/img/charlotteicone.jpg"
                alt="Logo Desenvolvedor"
                class="rounded-circle me-3 border border-light"
                style="width: 60px; height: 60px;"
              />
              <div class="text-start">
                <span class="fw-semibold text-white">Charlotte Dev & Tech</span><br />
                <a href="mailto:seuemail@seudominio.com" class="text-light small text-decoration-none">
                  charlottedevtech@gmail.com
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Linha final -->
      <hr class="border-light opacity-25 my-4" />

      <div class="text-center small text-light opacity-75">
        © {{ new Date().getFullYear() }} Charlotte Dev & Tech. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup>
// Nenhuma lógica específica, apenas estático por enquanto.
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0a58ca 0%, #0d6efd 100%);
}

.footer a:hover {
  text-decoration: underline;
  color: #fff;
  transition: color 0.3s ease;
}
</style>

  
