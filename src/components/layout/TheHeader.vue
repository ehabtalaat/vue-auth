<template>
  <header>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">vue-auth</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link class="nav-link active" aria-current="page" to="/home">home </router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/about">about </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            action
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#" @click.prevent="logout">logout</a></li>
          </ul>
        </li>
      </ul>
       
    </div>
  </div>
</nav>
  </header>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      Swal.fire({
  position: 'top-end',
  icon: 'success',
  title:  'تم تسجيل الخروج بنجاح',
  timer: 1500
})
   this.$router.go('/login');
    }
  }
}
</script>


