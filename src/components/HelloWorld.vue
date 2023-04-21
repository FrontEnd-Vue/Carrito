<template>
  
  <!-- <div class="container">
    <input type="checkbox" v-model="lista" value="Gaby">
    <label for="lista" class="m-2">Gaby</label>
    <input type="checkbox" v-model="lista" value="Vale">
    <label for="lista" class="m-2">Vale</label>
    <input type="checkbox" v-model="lista" value="Rodri">
    <label for="lista" class="m-2">Rodri</label>
    <p>Valores seleccionados {{ lista }}</p>
  </div>
  <hr> -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p class="mt-2" :style="colorNumero">El número es : {{ numero }}</p>
    <button class="btn btn-success m-1" @click="sumar">Sumar</button>
    <button class="btn btn-warning m-1" @click="restar">Restar</button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      numero: 0,
      lista: []
    }
  },
  methods: {
    sumar(){
      this.numero = this.numero + 1
    },
    restar(){
      this.numero = this.numero - 1
    }
  },
  computed: {
    colorNumero(){
      return [this.numero > 5 ? {'color':'green'} : {'color':'red'}]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
