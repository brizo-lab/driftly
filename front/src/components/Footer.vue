<template>
  <footer ref="footerRef" class="footer">
    <div class="footer-grid">

      <!-- 🔥 Botón Scroll -->
      <div class="scroll-container">
        <button class="scroll-to-top" :class="{ show: showScroll }" @click="scrollToTop">
          <span>➜</span>
        </button>
      </div>

      <!-- 🔥 Newsletter -->
      <div class="newsletter">
        <h2>Where Next?</h2>
        <div class="email-input">
          <input type="email" placeholder="No plans? We’ve got one for you. Put your email here!" />
          <button class="send-button">➜</button>
        </div>
      </div>

      <!-- 🔥 Redes Sociales -->
      <div class="social-media">
        <h3>Stay social</h3>
        <div class="icons">
          <a href="#"><img src="/iconos1-01.png" alt="Instagram"></a>
          <a href="#"><img src="/iconos1-02.png" alt="LinkedIn"></a>
        </div>
      </div>

      <!-- 🔥 Enlaces -->
      <div class="footer-links">
        <h3>Driftly</h3>
        <ul>
          <li><a href="#">Our story</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Support our project!</a></li>
        </ul>
      </div>

      <!-- 🔥 Copyright -->
      <div class="footer-bottom-container">
        <p class="footer-bottom">©2025 Driftly. All rights reserved.</p>
      </div>

      <!-- 🔥 Logo fuera de la container para alinearlo bien -->
      <div class="big-logo">
        <img src="/LOGO4.svg" alt="Driftly">
      </div>

    </div>
  </footer>
</template>

<script>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

export default {
  setup() {
    const showScroll = ref(false);
    const footerRef = ref(null);

    const handleScroll = () => {
      if (footerRef.value) {
        const footerTop = footerRef.value.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        showScroll.value = footerTop < windowHeight;
      }
    };

    onMounted(() => {
      nextTick(() => {
        if (footerRef.value) {
          window.addEventListener("scroll", handleScroll);
          handleScroll(); // 🔥 Estado inicial correcto
        }
      });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const scrollToTop = () => {
      console.log("Botón de scroll clickeado");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return {
      showScroll,
      scrollToTop,
      footerRef
    };
  },
};
</script>

<style scoped>
.footer {
  font-family: "Sora", sans-serif;
  background: #1c1c1c;
  color: white;
  padding: 2% 5%;
  position: relative;
  overflow: hidden;

}

/* 🔥 Grid del footer */
.footer-grid {
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
  text-align: left;
  width: 100%;
  margin: auto;
}

/* 🔥 Botón Scroll */
.scroll-container {
  grid-column: span 2;
  display: flex;
  justify-content: flex-end;
  margin-top: -30px;
  z-index: 9999;
  padding: 1.5%;
}

.scroll-to-top {
  background: #c4e221;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 1.8rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 0;
  z-index: 9999;
  rotate: -90deg;
  visibility: hidden;
}

.scroll-to-top.show {
  opacity: 1;
  transform: scale(1);
  visibility: visible;
}

.scroll-to-top:hover {
  transform: scale(1.1);
}

/* 🔥 Newsletter */
.newsletter {
  grid-column: 1;
}

.newsletter h2 {
  font-size: 5.5rem;
  font-weight: 100;
  margin-bottom: 5px;
}

.email-input {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 45px;
  overflow: hidden;
  padding: 0px;
}

.email-input input {
  border: none;
  padding: 10px;
  flex-grow: 1;
  font-size: 1rem;
}

.send-button {
  background: #c4e221;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
}

/* 🔥 Redes Sociales */
.social-media {
  grid-column: 2;
  text-align: right;
  font-size: 2rem;
}

.icons {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

.icons img {
  width: 50px;
  transition: transform 0.3s;
}

.icons img:hover {
  transform: scale(1.1);
}

/* 🔥 Enlaces */
.footer-links {
  grid-column: span 2;
}

.footer-links h3 {
  margin-bottom: 10px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin: 5px 0;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-weight: 200;
}

.footer-links a:hover {
  color: #c4e221;
}

/* 🔥 Copyright */
.footer-bottom-container {

  width: 100%;
  padding-top: 20px;
}

/* 🔥 Texto de copyright */
.footer-bottom {
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
  white-space: nowrap;
}

/* 🔥 LOGO GRANDE */
.big-logo {
  position: relative;
  width: 100%;
  opacity: 0.8;
  z-index: 2;

}

@media (max-width: 900px) {
  .footer {
  padding: 5% 5%;
  grid-template-rows: auto auto auto auto;
}

.scroll-container {
  grid-column: span 2;
  margin-top: -30px;
  z-index: 9999;
  padding: 1.5%;
}


.newsletter {
  grid-column: span 2;
}

.newsletter h2 {
  font-size: 3.5rem;
  font-weight: 100;
  margin-bottom: 5px;
}

.email-input input {
  font-size: 0.95rem;
}

.social-media {
  grid-column: span 2;
  text-align: center;
align-content: center;
font-size: 1.5rem;
padding-bottom: 10px;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.footer-links {
  grid-column:  span 2;
  text-align: center;
  padding-bottom: 10px;
}

  .footer-bottom {
    font-size: 0.9rem;
  }

  .big-logo{
    width: 50%;
    right: -50%;
  }


}




/* 🔥 Responsive */
@media (max-width: 600px) {
  .footer {
  padding: 8% 5%;
  grid-template-rows: auto auto auto auto auto;
}

.scroll-container {
  grid-column: span 2;
  margin-top: -30px;
  z-index: 9999;
  padding: 1.5%;
}


.newsletter {
  grid-column: span 2;
}

.newsletter h2 {
  font-size: 3.5rem;
  font-weight: 100;
  margin-bottom: 5px;
}

.email-input input {
  font-size: 0.95rem;
}

.social-media {
  grid-column: span 2;
  text-align: center;

align-content: center;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.footer-links {
  grid-column: span 2;
  text-align: center;
}



  .footer-bottom {
    font-size: 0.6rem;
  }

  .big-logo{
    width: 80%;
    right: -20%;
  }


}
</style>
