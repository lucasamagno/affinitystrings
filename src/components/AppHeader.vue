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
}

.navbar-logo {
  
}

.navbar-item {
  padding: 0.5em 1em;
}
</style>
