<template>
  <div class="container mt-3">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-if="!loading && Object.keys(prd).length > 0" class="row">
      <div class="col">
        <pre>{{ prd }}</pre>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link class="btn btn-success ms-3" to="/productos">Regresar</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import { ProductService } from "@/services/ProductService";
import Spinner from "@/components/Spinner";

export default {
  name: "ProductDetails",
  components: { Spinner },
  data: function() {
    return {
      loading: false,
      prd: {},
      errorMessage: null
    };
  },
  created: async function() {
    let prdId = this.$route.params.prdId;
    try {
      this.loading = true;
      let response = await ProductService.getPrd(prdId);
      this.loading = false;
      this.prd = response.data;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  }
};
</script>
