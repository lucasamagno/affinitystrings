<!-- src/views/Lessons.vue -->
<template>
    <div>
      <h1>Lessons Page</h1>
      <p>Welcome to the Lessons Page</p>
      <ul>
        <li v-for="lesson in lessons" :key="lesson.id">
          {{ lesson.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lessons: [
          { id: 1, title: 'Introduction to Vue.js' },
          { id: 2, title: 'Components in Vue.js' },
          { id: 3, title: 'Routing with Vue Router' },
        ]
      };
    }
  }
  </script>
  
  <style>
  </style>
  