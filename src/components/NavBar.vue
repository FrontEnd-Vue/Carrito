<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">Front-End</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/home">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/usuarios" v-if="$store.state.loggin">Usuarios</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link px-3" to="/productos" v-if="$store.state.loggin">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/about">Acerca</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link px-3" to="/tienda">Tienda</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" v-if="!$store.state.loggin">Login</router-link>
            <router-link class="nav-link" to="/logout" v-if="$store.state.loggin">LogOut</router-link>
          </li>
        </ul>
      </div>
  
      <!--CART-->
      <div id="cart-info" class="nav-info cart-info">
          <span class="cart-info__icon"><i class="fas fa-shopping-cart"></i></span>
          <p><span id="item-count">0 </span> items</p>
      </div>

      <section class="cart" id="cart">
          <h1 class="section-header">Carro</h1>
          <div class="cart-row">
              <span class="cart-item cart-header cart-column">Productos</span>
              <span class="cart-price cart-header cart-column">Precio</span>
              <span class="cart-quantity cart-header cart-column">Cantidad</span>
          </div>
          <div class="cart-items"></div>
          <div class="cart-total">
              <strong class="cart-total-title">Total</strong>
              <span class="cart-total-price" id="total-price">$0</span>
          </div>
          <button class="btn btn-secondary btn-vaciar" id="vaciar" type="button">Vaciar</button>
          <button class="btn btn-primary btn-purchase" id="pagar" type="button">Pagar</button>
      </section>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      ...mapState(['loggin'])
    }
  }
};
</script>

<style>

</style>