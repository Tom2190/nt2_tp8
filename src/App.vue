<template>
  <div class="container-fluid bg-secondary full-height full-width">
    <div>
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.jumbotron {
  padding-top: 48px !important;
  padding-bottom: 48px !important;

}
  html, body {
  height: 100%;
  background-color: grey;
}
.full-height {
  height: 100%;
}
</style>
