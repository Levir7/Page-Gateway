<script setup>

</script>

<template>
  <main class="main-container-home">
    <div class="text_sliders"> 
        <p>WELCOME TO <br> GATEWAY FABRICATION SOLUTIONS</p>
        <p>YOUR TRUSTED SOURCE FOR QUALITY MANUFACTURED COMPONENTS</p>
      </div>
    <section class="main-home-slider-container">
      <ul>
        <li>
          <img src="../assets/img/slide-1.jpg" alt="" >
        </li>
        <li>
          <img src="../assets/img/slide-2.jpg" alt="" >
        </li>
        <li>
          <img src="../assets/img/slide-3.jpg" alt="" >
        </li>
      </ul>
    </section>
    <section class="main-home-introduction">
      <h1>
        WE MANUFACTURE RESULTS
      </h1>
      <p>
        Gateway Fabrication Solutions is a results-oriented organization with a commitment to quality and cost-effective results for our clients. We achieve these goals by employing highly efficient processes based on continuous improvement and promoting lean six sigma methodologies.
      </p>
    </section>
    <section class="main-home-quality">
      
      <article class="quality-text">
        <h2>
          OUR QUALITY COMMITMENT
        </h2>
        <p>
          We are dedicated to providing comprehensive manufacturing solutions through our Quality Management System, focused on compliance of our strategic plan and whose framework is focused on exceeding the requirements of our business partners or any other related entity by means of continuous improvement.
        </p>
      </article>
      
      <section class="grid-quality-commitment">

        <router-link to="/Metal-stamping">
        <div class="grid-item">
          <div class="grid-img-container">
            <img src="../assets/img/home-metalstamping.jpg" alt="">
          </div>
          
          <div class="grid-item-message">
            <h3 class="tittle">METAL STAMPING</h3>
            <p class="text1">We can manufacture high mix single stroke die parts to high volume progressive die parts.</p>
            <p class="text2">Read More <span>>></span></p>
          </div>
        </div>
      </router-link>

      <router-link to="/tube-forming">
        <div class="grid-item">
          <div class="grid-img-container">
            <img src="../assets/img/home-tube-forming.jpg" alt="">
          </div>
          
          <div class="grid-item-message">
            <h3>TUBE FORMING</h3>
            <p>We have the highest manufacturing flexibility on tube forming and bending in the market.</p>
            <p class="text2">Read More <span>>></span></p>
          </div>
        </div>
      </router-link>

      <router-link to="/machining">
        <div class="grid-item">
          <div class="grid-img-container">
            <img src="../assets/img/home-machining.jpg" alt="">
          </div>
          
          <div class="grid-item-message">
            <h3>MACHINING</h3>
            <p>We manufacture using state-of-the-art equipment and tightest dimensional needs.</p>
            <p class="text2">Read More <span>>></span></p>
          </div>
        </div>
      </router-link>

      <router-link to="/plating">
        <div class="grid-item">
          <div class="grid-img-container">
            <img src="../assets/img/home-pltaing.jpg" alt="">
          </div>
          
          <div class="grid-item-message">
            <h3>PLATING</h3>
            <p>We offer competitive and environmental solutions for your surface coating challenges.</p>
            <p class="text2">Read More <span>>></span></p>
          </div>
        </div>
      </router-link>
        
        
        
      </section>
    </section>
    <section class="main-home-solutions">
      <div class="solutions-text">
        <h2>Solutions For All Major Industries</h2>
      </div>  
      
      <div class="grid-solutions-container">
        <div class="grid-item-solutions customer-products">
          <span></span>
          <h3>Consumer <br> Products</h3>
        </div>
        <div class="grid-item-solutions HVAC">
          <span></span>
          <h3>HVAC</h3>
        </div>
        <div class="grid-item-solutions Energy">
          <span></span>
          <h3>Energy/ <br> Electrical</h3>
        </div>
        <div class="grid-item-solutions Industrial">
          <span></span>
          <h3>Industrial <br> Equipment</h3>
        </div>
        <div class="grid-item-solutions Automotive">
          <span></span>
          <h3>Automotive</h3>
        </div>
      </div>
  
    </section>
    <section class="main-home-location">
      <div class="location-text">
        <h2>Centrally Located for US and Mexico Distribution</h2>
        <p>Our centralized location allows us to be a true “gateway” for American and Mexican manufacturing companies – Hours away from major manufacturing hubs .</p>
      </div>
      <picture class="location-img-container">
        <source media="(min-width: 630px)" srcset="../assets/img/img-map.jpg">
        <img class="mobile-img" src="../assets/img/img-locations-map-mobile.jpg" alt="location gateway fabrication">
      </picture>
    </section>
</main>
</template>
