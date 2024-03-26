<template>
  <div>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
/* Global styles or App-specific styles can go here */
</style>
