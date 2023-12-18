<template>
  <a :href="project.url" target="_blank" class="project-card-link">
    <div class="project-card" 
         @mouseover="isHovering = true" 
         @mouseleave="isHovering = false">
      <div class="left-column">
        <img :src="project.image" alt="Project Image" class="project-image"/>
      </div>
      <div class="right-column">
        <h3 :class="{'highlight': isHovering }">{{ project.title }}</h3>
        <p class="description">{{ project.description }}</p>
        <ul class="tools">
          <li v-for="tool in project.tools" :key="tool" class="tool-bubble" 
              @mouseover="isHovering = true" 
              @mouseleave="isHovering = false">{{ tool }}</li>
        </ul>
      </div>
    </div>
  </a>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
  project: {
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

.project-card {
  display: flex;
  padding: 20px;
  margin-bottom: 10px;
  transition: filter 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #040911;
  border-radius: 20px;
  color: white;
}

.project-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
  filter: brightness(1.4); 
}

.project-card-link {
  text-decoration: none;
  color: inherit;
}

.project-card:hover .project-image {
  transform: translateY(-10px); 
}

.left-column {
  flex: 1; 
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.project-image {
  max-width: 100%; 
  border-radius: 10px; 
  transition: transform 0.3s ease; 
}

.right-column {
  flex: 2; 
  padding-left: 20px; 
}

.tools {
  list-style: none; 
  padding: 0; 
  display: flex; 
  flex-wrap: wrap; 
  gap: 10px; 
}

.highlight {
  color: #007bff;
}

.tool-bubble {
  background-color: #007bff; 
  color: white; 
  padding: 5px 10px; 
  border-radius: 15px; 
  font-size: 0.85em; 
  cursor: pointer;
}

h3 {
  padding: 0;
  padding-bottom: 10px;
  margin: 0;
  transition: color 0.3s ease;
  font-weight: 500; 
  opacity: 70%;
}

p {
  padding: 0;
  margin: 0;
}

.project-card-link {
  text-decoration: none;
  color: inherit; 
}
</style>
