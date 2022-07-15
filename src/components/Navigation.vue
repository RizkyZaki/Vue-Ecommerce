<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container">
      <h1 class="fs-5 fw-bolder text-white">E-Commerce</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav px-3 mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About Us</router-link>
          </li>
        </ul>
        <div class="list2 nav-item">
          <router-link to="/Cart"
            ><i class="fa-solid fa-cart-shopping"></i
          ></router-link>
        </div>
        <div class="list2 nav-item">
          <router-link to="/"><i class="fa-solid fa-user"></i></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
$mainColor: #3a9b4c;

nav {
  background-color: $mainColor !important;
  h1 {
    margin: 0;
  }
  .list2 {
    margin-left: 14px;
    a {
      color: white !important;
      transition: all 0.2s ease;
    }
    a:hover {
      opacity: 0.3;
    }
  }
}
</style>