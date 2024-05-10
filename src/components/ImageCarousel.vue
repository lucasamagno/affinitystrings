<template>
  <div class="carousel">
    <button @click="prev" class="arrow left">&lt;</button>
    <div class="images" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
      <img v-for="(image, index) in images" :src="image" :key="index">
    </div>
    <button @click="next" class="arrow right">&gt;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
  require('@/assets/sherriPlus1.jpeg'),
  require('@/assets/sherriJohnNancy.jpg'),
  require('@/assets/sherriPlus3.jpeg'),
  require('@/assets/sherriLaurynJohn.jpg'),
  require('@/assets/sherriAndLauryn.jpeg'),
  require('@/assets/sherriGoodPicture.jpg'),
  require('@/assets/IMG_0029.jpeg'),
  require('@/assets/IMG_0842.jpg'),
  require('@/assets/IMG_2074.jpg'),
  require('@/assets/IMG_5163.jpg'),
]);

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 75%; /* Adjust to take up 75% of the screen */
  margin: 0 auto; /* Center the carousel horizontally */
  overflow: hidden;
  background: #f0f0f0; /* Add a background color for better visibility */
}

.images {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.images img {
  width: 100%;
  height: auto;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.arrow.left {
  left: 0;
}

.arrow.right {
  right: 0;
}
</style>
