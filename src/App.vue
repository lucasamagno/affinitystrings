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
h1 {
  font-size: 3.4rem;
  font-family: "Crimson Text", "serif";
  font-weight: normal;
  text-align: center;
}

h2 {


}

h3 { 

}

p {
  font-family: "Nunito", "serif";
  font-size: 16px;
  color: #434a56
}


</style>
