<template>
    <div class="container mt-5">
      <p class="display-5">Te lo vendo</p>
      <div v-if="loading">
        <Spinner />
      </div>
      <div class="row">
        <div class="card m-2" style="width: 18rem;" v-for="prod in productos" :key="prod.id">
          <img v-bind:src="prod.image" class="card-img-top product__image" style="width: 200px; height: 250px;" alt="productos">
          <div class="card-body">
            <h5 class="card-title product-title">{{ prod.title }}</h5>
            <p class="card-text product__price">Precio :${{ prod.price }}</p>
            <router-link :to="'/producto/' + prod.id" class="btn btn-success btn-sm text-decoration-none">
            Detalles</router-link>
            <a href="#" class="btn btn-info btn-sm m-1 AGREGA">Añadir al carro</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Spinner from "@/components/Spinner";
export default {
  name: 'ProductsView',
  components: { Spinner },
  data() {
    return {
      loading: false,
      productos: []
    }
  },
  created: async function() {
    try {
        this.loading = true;
        const url = "https://fakestoreapi.com/products";
        const res = await fetch(url);
        if (res.ok) {
          this.loading = false;
          this.productos = await res.json();
        } else {
          this.loading = false;
          console.log(res.status);
        }
    } catch (err) {
        this.loading = false;
        console.log(err)
      }
  }
}
</script>
