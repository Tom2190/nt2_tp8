<template>
    <section class="src-formulario">
  <div class="jumbotron">
    <h2>Formulario</h2>
    <hr>

    <vue-form :state="formState" @submit.prevent="postUsuario()">

      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre"
          class="form-control"
          autocomplete="on"
          v-model.trim="formData.nombre"
          required
          :minlength="nombreLengthMin"
          :maxlength="nombreLengthMax"
          no-espacios
        >
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">
            No se permiten espacios intermedios en este campo
          </div>
          <div slot="minlength" class="alert alert-danger mt-1">
            Se deben ingresar como mínimo {{nombreLengthMin}} caracteres
          </div>
          <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-danger mt-1">
            Máximo de caracteres ({{nombreLengthMax}}) alcanzados
          </div>
        </field-messages>
      </validate>
      <br>

      <validate tag="div">
        <label for="edad">Edad</label>
        <input 
          type="number" 
          id="edad" 
          class="form-control"
          name="edad"
          autocomplete="on"
          v-model.number="formData.edad"
          required
          :min="edadMin"
          :max="edadMax"
        >
        <field-messages name="edad" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="min" class="alert alert-danger mt-1">La edad mínima es de {{edadMin}} años</div>
          <div slot="max" class="alert alert-danger mt-1">La edad máxima es de {{edadMax}} años</div>
        </field-messages>
      </validate>
      <br>

      <validate tag="div">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          name="email"
          autocomplete="off"
          v-model.trim="formData.email"
          required
        >
        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
        </field-messages>
      </validate>
      <br>

      <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>

    </vue-form>

  </div>
</section>
</template>



<script>
export default {
  name: 'src-formulario',
  components: {},
  data () {
    return {
      formData : this.getInicialData(),
      formState: {},
      nombreLengthMin : 3,
      nombreLengthMax: 15,
      edadMin: 18,
      edadMax: 120,
    }
  },
  computed: {},
  mounted () {},
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: '',
      }
    },
    postUsuario() {
      this.$store.dispatch('postUsuarioAction',this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()
    },
  }
}
</script>



<style scoped>
.jumbotron {
    background-color: rgb(129, 32, 173);
    color: rgb(255, 255, 255);
}
</style>