<script setup></script>

<template>
  <section class="img-header">
    <figure>
      <img src="../assets/img/headerImage5.jpg" alt="" />
    </figure>
  </section>

  <section class="main-container">
    <nav class="nav-page-info">
      <router-link class="nav-item-page" to="/">Home</router-link>
      <p>></p>
      <router-link class="nav-item-page" to="/tube-forming"
        >Contact</router-link
      >
    </nav>
    <div class="main-text-container">
      <article class="information-text-container contact-text-container">
        <h2 class="contact-h2">CNC MACHINING</h2>
        <p>
          Please feel free to call us at +52 338.995.0263 (Mexico) or fill out
          the form below so we can route your request to the proper team member.
        </p>
      </article>
    </div>

    <form action="enviar.php" method="POST" class="main-form-container">
      <div id="row-form1" class="row-form form-item">
        <ul>
          <li id="form-text-FullName">
            <label for="form-fullName" id="form-labelFN" name="fullname">Full Name</label>
            <input type="text" id="form-fullName" class="form-item" />
          </li>
          <li id="form-text-CompanyName">
            <label for="form-companyName" id="form-labelCN">Company Name</label>
            <input type="text" id="form-companyName" class="form-item" name="companyname"/>
          </li>
          <li id="form-text-EmailAddress">
            <label for="form-emailAddress" id="form-labelEA" >Email Address</label>
            <input type="email" id="form-emailAddress" class="form-item" name="email" required/>
          </li>
        </ul>
      </div>
      <div id="row-form2" class="row-form">
        <ul>
          <li id="form-select-service">
            <label for="form-select" id="form-labelSelect">Service of Interest</label>
            <select name="service " id="form-select" class="form-item" placeholder="Service of Interest">
              <option value=""></option>
              <option value="General Inquery">General Inquery</option>
              <option value="Metal Stamping">Metal Stamping</option>
              <option value="Tube Forming">Tube Forming</option>
              <option value="Machining">Machining</option>
              <option value="Plating">Plating</option>
            </select>
          </li>
          <li id="form-text-Comments" >
            <!-- <label for="comments-form" id="form-labelComments" name="Comments">Comments</label> -->
            <textarea
              name="comments"
              placeholder="Comments"
              class="form-item"
              id="form-comments"
              cols="30"
              rows="5"
            ></textarea>
          </li>
          <div class="form-button-container">
            <li id="form-uploadFile">
              <div for="" class="form-button">
                <input type="file" value="" id="form-button-file" name=""/>
              </div>
            </li>
            <li id="form-submitForm">           
              <div class="form-button">
                <input type="submit" value="Submit Form" id="form-button-submit"/>
              </div>     
            </li>
          </div>
        </ul>
      </div>
    </form>
  </section>
</template>

<style></style>
