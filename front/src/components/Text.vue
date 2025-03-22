<template>
    <section class="text-section">
      <div class="content">
        <div class="left-text">
          <h2>Live Free.<br> Move Often.<br> <span>BE NOMAD</span></h2>
        </div>
        <div class="right-text">
          <p>
            Your home is wherever you feel inspired. We reveal the best place to live today as a digital nomad—
            where the sun shines, the vibe is right, and life flows effortlessly. Because the right place makes all the difference.
          </p>
          <a href="#" class="explore-link">Explore, work, and discover your next destination</a>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .text-section {
    font-family:"Sora", sans-serif;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 5%;
    background: #fff;
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    gap: 150px;
  }
  
  .left-text {
    flex: 1;
  }
  
  .left-text h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #141414;
    line-height: 1.2;
  }
  
  .left-text span {
    font-weight: 900;
  }
  
  .right-text {
    flex: 1.3;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
  }
  
  .explore-link {
    display: block;
    margin-top: 15px;
    font-weight: 600;
    text-decoration: underline;
    color: #141414;
  }
  
  .explore-link:hover {

    color: #C3E52A;
  }

  /* 🔥 Responsive para tablets */
@media (max-width: 900px) {
  .content {
    gap: 90px;
  }

  .left-text h2 {
    font-size: 2.5rem;
  }

  .right-text {
    font-size: 1rem;
  }
}

/* 🔥 Responsive para móviles */
@media (max-width: 600px) {
  .content {
    display: grid;
    grid-template-columns: 1fr; /* 🔥 Se convierte en una sola columna */
    gap: 30px;
    text-align: center; /* 🔥 Centra el texto */
  }

  .left-text {
    order: 1; /* 🔥 Mantiene la estructura visual */
  }

  .left-text h2 {
    font-size: 2rem; /* 🔥 Tamaño mínimo recomendado para UI */
    line-height: 1.3;
  }

  .right-text {
    order: 2;
    font-size: 1rem; /* 🔥 Ajuste para mejor legibilidad */
    line-height: 1.5;
  }

  .explore-link {
    font-size: 1rem;
  }
}
</style>