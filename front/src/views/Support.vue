<template>
  <div class="support-container">
    <!-- 🔥 Sección Hero Mejorada -->
    <section class="hero">
      <div class="overlay">
        <div class="hero-content">
          <h1>Support Our Project</h1>
          <p>Help us grow and improve Driftly for digital nomads worldwide.</p>
        </div>
      </div>
    </section>

    <!-- 🔥 Sección de Contenido Mejorada -->
    <section class="content">
      <h2>Why Support Driftly?</h2>
      <p>
        Driftly is a community-driven platform designed for travelers and remote workers. 
        We strive to provide the best real-time insights into the top places to live and work remotely.
      </p>
      <p>
        Your support helps us maintain and expand the platform, develop new features, 
        and keep our recommendations accurate and up to date.
      </p>

      <h2>Ways You Can Help</h2>
      <ul>
        <li>☕ <span class="highlight">Buy us a coffee</span> and fuel our creativity</li>
        <li>💬 <span class="highlight">Share Driftly</span> with your network and help us grow</li>
        <li>💡 <span class="highlight">Suggest new features</span> or destinations</li>
        <li>📲 <span class="highlight">Donate via Bizum</span> – Quick and easy support!</li>
      </ul>
    </section>

    <!-- 🔥 Sección CTA Mejorada -->
    <section class="cta">
      <div class="cta-content">
        <h2>Join Our Mission</h2>
        <p>Your support keeps Driftly running. Every contribution counts!</p>
        <button class="cta-button">Donate Now</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 🔥 Fondo completamente negro */
.support-container {
  text-align: center;
  padding: 5% 5%;
  background: #1c1c1c;
  color: white;
  font-family: "Sora", sans-serif;



}

/* 🔥 Hero Mejorado */
.hero {
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('/paradise.jpg') center/cover no-repeat;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.overlay {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.4rem;
  max-width: 600px;
  margin: 0 auto;
}

/* 🔥 Sección de Contenido */
.content {
  text-align: left;
  max-width: 800px;
  margin: 50px auto;
}

.content h2 {
  margin-top: 40px;
  font-size: 2.2rem;
  border-bottom: 3px solid #C4E221;
  display: inline-block;
  padding-bottom: 5px;
}

.content p,
.content ul {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-top: 10px;
}

.content ul {
  list-style: none;
  padding: 0;
}

.content li {
  margin: 10px 0;
}

/* 🔥 Resaltado en Verde */
.highlight {
  color: #C4E221;
}

/* 🔥 Sección CTA Mejorada */
.cta {
  color: white;
  padding: 40px 0;
  margin-top: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
}

.cta-content {
  background: #252525; /* 🔥 Ligero cambio para diferenciar del footer */
  padding: 40px 60px;
  border-radius: 12px;
  max-width: 550px; /* 🔥 Más estrecho */
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3); /* 🔥 Sombra ligera */
}

/* 🔥 Botón CTA Mejorado */
.cta-button {
  background: #c4e221;
  color: black;
  border: none;
  padding: 14px 30px;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.cta-button:hover {
  transform: scale(1.05);
}

/* 🔥 Responsividad */
@media (max-width: 600px) {
  .support-container {
  padding: 20% 0%;

}

  .hero-content h1 {
    font-size: 2.3rem;
  }

  .hero-content p {
    font-size: 1rem;

  }

  .content {
    padding: 0 20px;
  }

  .content h2 {
    font-size: 18pt;
  }

  .content p {
    font-size: 16pt;
  }

  .cta-content {
    padding: 30px;
  }

  .cta h2 {
    font-size: 1.5rem;
  }

  .cta p {
    font-size: 1rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 12px 30px;
  }

  .cta-content {

  padding: 30px 40px;
  max-width: 380px; /* 🔥 Más estrecho */
  }
}
</style>
