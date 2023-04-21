<template>
    <div class="container">
      <div class="col-12 mt-5">
        <div v-if="loading">
          <Spinner />
        </div>
        <div v-if="!loading && productos.length > 0" class="card">
          <div class="card-header">
            <h3>Listado de Productos</h3>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead class="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="prd in productos" :key="prd.id">
                <td>{{ prd.id }}</td>
                <td>
                  <router-link :to="'/producto/' + prd.id" class="text-decoration-none fw-bold text-success">{{ prd.title
                  }}
                  </router-link>
                </td>
                <td>{{ prd.price }}</td>
                <td>{{ prd.category }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ProductService } from "@/services/ProductService";
import Spinner from "@/components/Spinner"; 
export default {
  name: 'ProductsView',
  components: { Spinner },
    data() {
    return {
      loading: false,
      productos: [],
      errmsg: '' 
    }
  },
  created: async () => {
    try {
      this.loading = true;
      let response = await ProductService.getAllPrds();
      this.loading = false;
      this.productos = response.data;
    } catch (err) {
        this.loading = false;
        console.log(err)
      }
  }
}
</script>

