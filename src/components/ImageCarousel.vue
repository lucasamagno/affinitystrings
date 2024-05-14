<template>
  <div class="carousel">
    <button @click="prev" class="arrow left">&lt;</button>
    <transition name="fade" mode="out-in">
      <img :src="currentImage" class="carousel-image" :key="currentIndex">
    </transition>
    <button @click="next" class="arrow right">&gt;</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

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

const currentImage = ref(images.value[currentIndex.value]);

watch(currentIndex, () => {
  currentImage.value = images.value[currentIndex.value];
});
</script>

<style scoped>
.carousel {
  display: flex; 
  justify-content: center; 
  position: relative;
  width: 50%; 
  height: 500px; 
  margin: 0 auto; 
  overflow: hidden;
  background: #f0f0f0;
}

.carousel-image {
  width: 100%; 
  height: 100%;
  object-fit: cover; 
  object-position: center;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
