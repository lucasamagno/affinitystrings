<template>
    <footer class="footer">
      <div class="footer-logo">
        <a href="https://facebook.com" target="_blank">
          <img src="/path-to-your-facebook-logo.svg" alt="Facebook" />
        </a>
      </div>
  
      <div class="footer-links">
        <router-link to="/" class="footer-item">Home</router-link>
        <router-link to="/lessons" class="footer-item">Lessons</router-link>
        <router-link to="/booking-inquiries" class="footer-item">Booking Inquiries</router-link>
        <router-link to="/contact-us" class="footer-item">Contact Us</router-link>
      </div>

      <div class="footer-copyright">
        © 2024 Affinity Strings
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em 0;
    color: white;
  }
  
  .footer-logo img {
    width: 50px; 
    height: auto;
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    margin: 1em 0;
  }
  
  .footer-item {
    text-decoration: none;
    padding: 0.5em 1em;
  }
  
  .footer-copyright {
    font-size: 0.75em;
    margin-top: 1em;
  }
  </style>
  