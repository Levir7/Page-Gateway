<script setup>

</script>

<template>
  <header class="header">
    <section class="header-container">
      <div class="header-phone">
        <span></span>
        <a href="tel:52-338-995-0263">338-995-0263</a>
      </div>
      <div class="menu-container">
        <figure>
          <a href="/">
            <img src="../src/assets/img/logo-gateway-color.png" alt="">
          </a>
        </figure>
        <div id="menu-slider" class="menu-slider-container">
          <p>MENU</p>
          <span class="menu.slide"> </span>
        </div>
        
      </div>
      <div id="nav.container" class="nav-container inactive">
        <div class="phone-contact-desk">
          <span class="mexico"></span>
          <a href="tel:52-338-995-0263">338-995-0263</a>
        </div>
        <nav>
          <router-link class="nav-item" to="/about">About Us</router-link>
          <router-link class="nav-item" to="/Metal-stamping">Metal Stamping</router-link>
          <router-link class="nav-item" to="/tube-forming">Tube Forming</router-link>
          <router-link class="nav-item" to="/machining">Machining</router-link>
          <router-link class="nav-item" to="/plating">Plating</router-link>
          <!-- <router-link class="nav-item" to="/contact">Contact</router-link> -->

        </nav>
      </div>
      
    </section>
  </header>

  <RouterView/>

  <footer>
    <section class="footer-container">
      <div class="footer-img-container">
        <img src="./assets/img/logo-gateway-white-footer.png" alt="">
      </div>
      <div class="footer-contact-container">
        <p>
         <strong> Mexico Facilities </strong><br>
          Ing. Tomas Limon Gutierrez 123 <br>
          Zona Industrial Sur <br>
          Guadalajara, Jal. CP 44940 <br>
          Mexico <br>
          P: 
          <a href="tel:52-338-995-0263">338 995 0263</a>
        </p>
        <a class="mail-contact" href="mailto:info@gatewayfabrication.com.mx">info@gatewayfabrication.com</a>
      </div>
      <div class="footer-iso-img-container">
        <span></span>
      </div>
    </section>
  </footer>
</template>

<style scoped>

</style>
