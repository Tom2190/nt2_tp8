<template>

  <section class="src-componentes-api-rest-full">
    <div class="jumbotron">
    <h2>Usuarios agregados</h2>
    <hr>
    <div class="media alert alert-info mt-3" v-for="(usuario,index) in usuarios" :key="index">
        <div class="media-body ml-4">
        <h4><u>Usuario {{ index+1 }}</u></h4>
        <br>
        <p>Nombre: {{usuario.nombre}}</p>
        <p>Edad: {{usuario.edad}}</p>
        <p>Email: {{usuario.email}}</p>
        <button class="btn btn-danger mr-3" @click="deleteUsuario(usuario.id)">Borrar usuario</button>
        </div>
        
    </div>
        <div v-if="usuarios.length" class="alert alert-primary mb-3"><h4>
        Se encontraron {{ usuarios.length }} usuarios.</h4>
        </div>
        <div v-else class="alert alert-secondary mb-3"><h4>
        No se encontraron usuarios.</h4>
        </div>
    </div>
  </section>
</template>


<script lang="js">

  export default  {
    name: 'src-componentes-api-rest-full',
    props: [],
    mounted() {
      this.getUsuarios()
    },
    data () {
      return {
        urlUsuarios : 'https://60a42f8cfbd48100179dbb56.mockapi.io/usuarios/',
        usuarios : []
      }
    },

    methods: {
      
      // Versión async / await:

      // async getUsuarios() {
      //   try {
      //     let respuesta = await this.axios(this.urlUsuarios)
      //     this.usuarios = respuesta.data
      //   }
      //   catch(error) {
      //     console.log(error)
      //   }
      // },
      
      getUsuarios() {
        this.axios(this.urlUsuarios)
        .then( respuesta => {
          console.log('AXIOS',respuesta.data)
          this.usuarios = respuesta.data
        })
        .catch(error => console.log(error))
      },

      async deleteUsuario(id) {
        try {
          let respuesta = await this.axios.delete(this.urlUsuarios+id)
          let user = respuesta.data
          let indice = this.usuarios.findIndex(usuario => usuario.id == user.id)
          this.usuarios.splice(indice,1)          
        }
        catch(error) {
          console.log(error)
        }        
      }
    }
}
</script>


<style scoped lang="css">
  .jumbotron {
    background: rgb(95, 2, 83);
    color: rgb(0, 240, 248);
  }
  hr {
    background-color: #333;
  }
</style>