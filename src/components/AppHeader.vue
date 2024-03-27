<template>
  <nav class="navbar">
      <router-link to="/" class="navbar-logo">Affinity Strings</router-link>

      <div class="nav-links">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/lessons" class="navbar-item">Lessons</router-link>
        <router-link to="/booking-inquiries" class="navbar-item">Booking Inquiries</router-link>
        <router-link to="/contact-us" class="navbar-item">Contact Us</router-link>
      </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;
}

.navbar-logo, .navbar-item {
  text-decoration: none;
  color: black; 
  font-family: "Crimson Text", serif;
}

.navbar-logo:visited, .navbar-item:visited {
  color: black;
}

.navbar-logo {
  font-size: 2.15rem;
}

.navbar-item {
  padding: 0.5em 1em;
  font-size: 1.3rem;
}

.navbar-item:hover {
  text-decoration: underline;
}


</style>
