<template>
  <div class="about-container">
    <!-- 🔥 Sección Hero Mejorada -->
    <section class="hero">
      <div class="overlay">
        <div class="hero-content">
          <h1>About Driftly</h1>
          <p>Discover the world's best places to live as a digital nomad.</p>
        </div>
      </div>
    </section>

    <!-- 🔥 Sección de Contenido Mejorada -->
    <section class="content">
      <h2>Our Vision</h2>
      <p>
        At Driftly, we believe that the world is your home. Our mission is to help 
        digital nomads and remote workers find the perfect locations where nature, 
        culture, and technology seamlessly blend together.
      </p>
      
      <h2>What We Do</h2>
      <p>
        We analyze cities, climates, and digital infrastructures to recommend 
        the best destinations for a nomadic lifestyle. Whether you're looking for 
        a vibrant city with co-working spaces or a peaceful retreat by the ocean, 
        Driftly guides you to your ideal spot.
      </p>

      <h2>Why It Matters</h2>
      <p>
        The way we live and work is changing. Remote work has created new 
        opportunities to explore the world while maintaining a career. 
        We want to empower digital nomads with the right information 
        to make every place feel like home.
      </p>
    </section>

    <!-- 🔥 Sección CTA Mejorada -->
    <section class="cta">
      <div class="cta-content">
        <h2>Join Us on Our Journey</h2>
        <p>Be part of a global movement redefining how and where we live.</p>
        <button class="cta-button">Get in Touch</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 🔥 Contenedor General */
.about-container {
  text-align: center;
  padding: 5% 5%;
  font-family: "Sora", sans-serif;
}

/* 🔥 Sección Hero */
.hero {
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('/paradise.jpg') center/cover no-repeat;
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
  border-bottom: 3px solid #c4e221;
  display: inline-block;
  padding-bottom: 5px;
}

.content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-top: 10px;
}

/* 🔥 Sección CTA Mejorada */
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
  background: #1c1c1c; /* 🔥 Se mantiene para diferenciar del footer */
  padding: 40px 60px;
  border-radius: 12px;
  max-width: 550px; /* 🔥 Más estrecho */
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3); /* 🔥 Sombra ligera para resaltar */
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
  .about-container {
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

  padding: 30px 50px;

  max-width: 380px; /* 🔥 Más estrecho */
  }
}
</style>
