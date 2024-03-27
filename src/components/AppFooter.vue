<template>
    <footer class="footer">
      <div class="footer-logo">
        <a href="https://www.facebook.com/AffinityStrings" target="_blank" class="footer-logo">
          <i class="fab fa-facebook-f"></i>
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
  }

  .footer-item {
    text-decoration: none;
    padding: 0.5em 1em;
    font-family: "Crimson Text", "serif";
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    margin: 1em 0;
  }

  .footer-item, .footer-logo {
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
  }

  .footer-item:visited, .footer-logo:visited {
    color: black;
  }

  .footer-item:hover {
    text-decoration: underline;
  }

  .footer-copyright {
    font-size: 82%;
    font-family: "Nunito", "serif";
  }
  </style>
  