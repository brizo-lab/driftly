<template>
  <div id="app">
    <Header />
    <router-view></router-view> <!-- Aquí se renderizan las vistas -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {

  box-sizing: border-box;
}

html, body {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden; /* Evita el desplazamiento lateral */
  margin: 0 !important; /* 🔥 Este es el truco */
  padding: 0 !important;
  display: flex;
  flex-direction: column;
}
</style>
