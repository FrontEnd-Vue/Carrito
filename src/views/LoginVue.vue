<template>
  <div class="container">
    <div class="row mt-5 justify-content-center">
      <div class="col-md-3">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h3">Ingreso</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="valida({ user: user.email, pass: user.password, users: usuarios})">
              <div class="mb-2">
                <input v-model="user.email"  class="form-control" placeholder="Email" type="email">
              </div>
              <div class="mb-2">
                <input v-model="user.password"  class="form-control" placeholder="Password" type="password">
              </div>
              <div class="mb-2">
                <input class="btn btn-success" type="submit" value="Ingresar">
              </div>
            </form>
          </div>
          <div v-if="$store.state.muestra" class="card-footer">
            <p>Usuario o contraseña invalida</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'LoginVue',
  data: function() {
      return {
        usuarios: [],
        user: {
            email: '',
            password: ''
        },
        ...mapState(['muestra'])
    };
  },
  created: async function() {
    try {
      let response = await UserService.getAllUsers();
      this.usuarios = response;
    } catch (error) {
      this.errorMessage = error;
    }
  },
  methods: {
    ...mapMutations(['valida']),
  }
};
</script>

<style>

</style>