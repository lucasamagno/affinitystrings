<template>
  <a :href="experience.url" target="_blank" class="experience-card-link">
    <div class="experience-card"
        @mouseover="isHovering = true" 
        @mouseleave="isHovering = false">
      <div class="left-column">
        <p class="dates">{{ experience.dates }}</p>
      </div>
      <div class="right-column">
        <h3 :class="{'highlight': isHovering }">{{ experience.titles[0] }} • {{ experience.company }}</h3>
        <div class="other-titles">
          <p v-for="(title, index) in experience.titles.slice(1)" :key="index" class="additional-title">• {{ title }}</p>
        </div>
        <p class="description">{{ experience.description }}</p>
        <ul class="skills">
          <li v-for="skill in experience.skills" :key="skill" class="skill-bubble">{{ skill }}</li>
        </ul>
      </div>
      <span class="arrow-icon" :class="{'hovered': isHovering}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20L20 4M20 4V20M20 4H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  </a>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});

const isHovering = ref(false);

onMounted(() => {
  console.log(props.experience);
});
</script>

<style scoped>

.experience-card {
  display: flex;
  padding: 20px;
  position: relative; 
  margin-bottom: 10px; 
  transition: filter 0.3s ease, box-shadow 0.3s ease; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  background-color: #040911;
  border-radius: 20px;
}

.experience-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
  filter: brightness(1.4); 
}

.experience-card:hover .arrow-icon {
  transform: translateY(-5px) scale(1.2); 
}

.left-column {
  flex: 0.7; 
}

.right-column {
  flex: 2; 
}

.skills {
  list-style: none; 
  padding: 0; 
  display: flex; 
  flex-wrap: wrap; 
  gap: 10px; 
}

.highlight {
  color: #007bff;
}

.skill-bubble {
  background-color: #007bff; 
  color: white; 
  padding: 5px 10px; 
  border-radius: 15px; 
  font-size: 0.85em;
  cursor: pointer;
}

.other-titles {
  font-size: 18px;
  padding-bottom: 20px;
}

h3 {
  padding: 0;
  margin: 0;
  transition: color 0.3s ease;
  font-weight: 500; 
  opacity: 70%;
}

p {
  padding: 0;
  margin: 0;
}

.experience-card-link {
  text-decoration: none; 
  color: inherit; 
}

.arrow-icon {
  position: absolute; 
  bottom: 10px; 
  left: 10px; 
  transition: transform 0.3s ease;
  opacity: 60%;
}

.hovered {
  transform: translateY(-5px) scale(1.2); 
}
</style>
