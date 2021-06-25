<template>
  <section class="src-componentes-api-rest-full">
    <div class="jumbotron">
    <h2>Usuarios agregados</h2>
    <hr>
    <div class="media alert alert-info mt-3" v-for="(usuario,index) in getUsuarios" :key="index">
        <div class="media-body ml-4">
        <h4><u>Usuario {{ index+1 }}</u></h4>
        <br>
        <p>Nombre: {{usuario.nombre}}</p>
        <p>Edad: {{usuario.edad}}</p>
        <p>Email: {{usuario.email}}</p>
        <button class="btn btn-danger mr-3" @click="deleteUsuario(usuario.id)">Borrar usuario</button>
        </div>
        
    </div>
        <div v-if="getUsuarios.length" class="alert alert-primary mb-3"><h4>
        Se encontraron {{ getUsuarios.length }} usuarios.</h4>
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
    data () {
      return {
      }
    },
    mounted() {
      this.$store.dispatch('getUsuariosAction')
     },
    computed: {
      getUsuarios() {
        return this.$store.state.usuarios
      }
    },
    methods: {
      deleteUsuario(id) {
        this.$store.dispatch('deleteUsuarioAction',id)
      },
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