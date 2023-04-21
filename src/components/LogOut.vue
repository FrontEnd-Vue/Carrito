<template>
    <div class="container">
    <div class="row mt-5 justify-content-center">
      <div class="col-md-3">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h4">Está seguro de salir ?</p>
          </div>
          <div class="card-body bg-light">
              <div class="mb-2">
                <button class="btn btn-primary m-1" @click="regresa">Regresar</button>
                <button class="btn btn-danger m-1" @click="logout">Salir</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  import { mapMutations } from 'vuex'
  import router from '../router'

  export default {
    name: "LogOut",
    methods: {
        ...mapMutations(['logout']),
        regresa(){
          router.push('/home')
        }
      },

    };
 
</script>