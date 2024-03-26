<template>
    <div>
      <h1>Booking Page</h1>
      <p>Welcome to the Booking Page</p>
      <form @submit.prevent="submitBooking">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="booking.name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="booking.email" required>
        <label for="lesson">Select Lesson:</label>
        <select id="lesson" v-model="booking.lesson" required>
          <option disabled value="">Please select one</option>
          <option v-for="lesson in lessons" :key="lesson.id" :value="lesson.id">{{ lesson.title }}</option>
        </select>
        <button type="submit">Book Lesson</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        booking: {
          name: '',
          email: '',
          lesson: null
        },
        lessons: [
          { id: 1, title: 'Introduction to Vue.js' },
          { id: 2, title: 'Components in Vue.js' },
          { id: 3, title: 'Routing with Vue Router' },
        ]
      };
    },
    methods: {
      submitBooking() {
        console.log('Booking submitted:', this.booking);
      }
    }
  }
  </script>
  
  <style>
  </style>
  