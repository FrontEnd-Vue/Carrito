<template>
  <div class="container">
    <div class="col-12 mt-5">
      <div class="card">
        <div class="card-header">
          <h3>Listado de Usuarios</h3>
        </div>
        <div class="card-body">
          <table class="table table-striped">
            <thead class="table-dark">
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Ususario</th>
                <th>WebSite</th>
              </tr>
            </thead>
            <tbody id="cuerpoUsr"></tbody>
          </table>
        </div>
        
        <button class="btn btn-outline-success btn-sm" @click="cargarDatos">Cargar Datos</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsuariosView',
  methods: {
    // cargarDatos() {
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => this.mostrarDatos(json))
    //   .catch(error => console.log(error))
    // },
    async cargarDatos () { 
      try{ 
        const url = "https://jsonplaceholder.typicode.com/users"; 
        const res = await fetch(url); 
        if(res.ok) { 
          const datos = await res.json(); 
          this.mostrarDatos(datos); 
        } else { 
          console.log(res.status); 
        }
      } catch(err) { 
        console.log(err) 
      } 
    },

    mostrarDatos(valor){
      let tblUser = '';
      for(let i=0; i < valor.length; i++){
          tblUser += `<tr>
              <td>${valor[i].id}</td>
              <td>${valor[i].name}</td>
              <td>${valor[i].username}</td>
              <td>${valor[i].website}</td>
          </tr> `
      }
      document.getElementById('cuerpoUsr').innerHTML = tblUser;
    }
  }
}
</script>
