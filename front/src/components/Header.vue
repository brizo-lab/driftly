<template>
  <nav 
    class="header" 
    :class="{ 
      hidden: isHidden, 
      'white-menu': $route.path === '/support',
      'dark-menu': $route.path === '/about',
      'mobile-menu-open': isMobileMenuOpen
    }"
  >
    <router-link to="/">
      <div class="logo">
        <img :src="logoSrc" alt="Logo" />
      </div>
    </router-link>
    <div class="menu" v-if="!isMobile">
      <ul>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/support">Support Our Project</router-link></li>
        <li>
          <span class="material-symbols-outlined icon" title="Language">language</span>
        </li>
      </ul>
    </div>

     <!-- 🔥 Botón de Menú Mobile -->
     <div class="menu-button" v-if="isMobile" @click="toggleMobileMenu">
      <span class="material-symbols-outlined">menu</span>
    </div>

    <!-- 🔥 Menú Mobile Desplegable -->
    <div class="mobile-menu" v-if="isMobileMenuOpen">
      <button class="close-button" @click="toggleMobileMenu">
        <span class="material-symbols-outlined">close</span>
      </button>
      <ul>
        <li><router-link to="/about" @click="toggleMobileMenu">About Us</router-link></li>
        <li><router-link to="/support" @click="toggleMobileMenu">Support Our Project</router-link></li>
        <li>
          <span class="material-symbols-outlined icon" title="Language">language</span>
        </li>
      </ul>
    </div>
</nav>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const lastScrollY = ref(0);
    const isHidden = ref(false);
    const isMobileMenuOpen = ref(false);
    const isMobile = ref(window.innerWidth <= 980);
    const logoSrc = ref("/LOGO4.svg");
    const isFirefox = ref(false);

    watch(route, (newRoute) => {
      if (newRoute.path === "/about") {
        logoSrc.value = isFirefox.value ? "/logo1.png" : "/LOGO1.svg";
      } else {
        logoSrc.value = isFirefox.value ? "/logo2.png" : "/LOGO4.svg"; // Usar el logo correcto para Firefox
      }
    });

    const handleScroll = () => {
      const currentScrollY = document.documentElement.scrollTop;
      console.log("Scroll detectado:", currentScrollY);

      if (currentScrollY > lastScrollY.value && currentScrollY > 10) {
        isHidden.value = true;
      } else {
        isHidden.value = false;
      }

      lastScrollY.value = currentScrollY;
    };

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 980;
    };

    onMounted(() => {
      console.log("Evento de scroll añadido");
      document.body.style.overflow = "visible"; // 🔥 Asegurar que el scroll funciona
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      if (navigator.userAgent.includes("Firefox")) {
        isFirefox.value = true;
        logoSrc.value = "/logo2.png"; // Cambiar el logo si es Firefox
      }
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });

    return {
      isHidden,
      logoSrc,
      isMobileMenuOpen,
      toggleMobileMenu,
      isMobile,
    };
  },
};
</script>

<style scoped>
/* 🔥 Menú principal */
nav {
  font-family: "Sora", sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  z-index: 100;
  transition: opacity 0.3s ease-in-out, background 0.3s ease-in-out;
  background: transparent;
}

/* 🔥 Ocultar menú cuando haces scroll hacia abajo */
.hidden {
  opacity: 0;
  pointer-events: none;
}

/* 🔥 Menú de SUPPORT en blanco */
.white-menu {
  color: white;
}

.white-menu .menu a {
  color: white;
}

.white-menu .menu a:hover {
  color: #C3E52A; /* Verde resalte */
}

.white-menu .icon {
  color: white;
}

/* 🔥 Menú de ABOUT US */
.dark-menu .logo img {
  width: 80px; /* 🔥 Un poco más pequeño */
}

/* 🔥 Ajuste del logo en ABOUT US y SUPPORT */
.white-menu .logo img,
.dark-menu .logo img {
  width: 40%; /* 🔥 Ajustamos el tamaño */
  margin-top: 10px;
  /* 🔥 Bajamos el logo para que no se solape con la imagen */
}

/* 🔥 Estilos del logo */
.logo img {
  width: 55%;
  margin-top: 18%;
  margin-left: 20%;
}

.menu {
  margin-right: 3%;
}

.menu ul {
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin-right: 0;
  align-items: center;
}

.menu li {
  display: inline-block;
  margin-right: 0;
}

.menu a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.menu a:hover {
  text-decoration: underline;
  color: #C3E52A;
}

.icon {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.icon:hover {
  transform: scale(1.05);
  color: #C3E52A;
}

/* 🔥 Estilos del botón del menú hamburguesa */
.menu-button {
  display: none;
  cursor: pointer;
  font-size: 2rem;
}

@media (max-width: 980px) {
  .menu {
    display: none; /* 🔥 Oculta menú en móviles */
  }

  .menu-button {
    display: block;
    margin-right: 4%;
  }

  .logo img {
  width: 35%;
  margin-top: 5%;
  margin-left: 5%;
}
}


/* 🔥 Estilos del menú móvil */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 200;
  transition: all 0.3s ease-in-out;
}

.menu-button:hover{
  color: #C3E52A;
}

.mobile-menu ul {
  list-style: none;
  text-align: center;
  padding: 0;
}

.mobile-menu li {
  margin: 20px 0;
  font-size: 1.5rem;
}

.mobile-menu a {
  text-decoration: none;
  color: black;
}

.mobile-menu .icon{
  color: black;
}

.mobile-menu a:hover {
  color: #C3E52A;
  text-decoration: underline;
}

.mobile-menu .icon:hover{
  color: #C3E52A;
}


.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.close-button:hover {
  color: #C3E52A;
}

</style>




