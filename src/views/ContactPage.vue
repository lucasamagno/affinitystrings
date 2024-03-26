<template>
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to get in touch with us!</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" rows="4" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.formData);
      }
    }
  }
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
  }
  input, textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }
  textarea {
    resize: vertical;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  