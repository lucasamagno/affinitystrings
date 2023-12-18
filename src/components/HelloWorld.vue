<script setup>
import WorkExperienceCard from "./WorkExperienceCard.vue";
import { experiences } from '../experiences'
import { projects } from '../projects'
import ProjectCard from "./ProjectCard.vue"
import emailjs from 'emailjs-com'
import { useToast } from 'vue-toastification';
import { ref } from "vue";

const fromEmail = ref('')
const subject = ref('')
const message = ref('')
const toast = useToast();

function sendEmail() {
  emailjs.send("service_izwy97u", "template_3ke76hi", {
    from_name: fromEmail.value,
    subject: subject.value,
    message: message.value,
  }).then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    toast.success("Message sent successfully!");
    fromEmail.value = '';
    subject.value = '';
    message.value = '';
  }, (err) => {
    console.error('EMAIL FAILED...', err);
    toast.error("Failed to send message.");
  });
}

const handleSubmit = () => {
  sendEmail(fromEmail.value, subject.value, message.value);
};

document.addEventListener('mousemove', (e) => {
  const gradient = document.getElementById('cursor-gradient');
  gradient.style.left = `${e.clientX}px`;
  gradient.style.top = `${e.clientY}px`;
  gradient.style.display = 'block';
});

</script>

<template>
  <div class="container">
    <div id="cursor-gradient"></div>
    <div class="sidebar">
      <section id="hero">
        <h1 id="name">Lucas A. Magno</h1>
        <h2>Software Engineer / DevOps Engineer</h2>
        <p>I build user friendly software solutions and streamline development workflows.</p>
      </section>

      <section id="contact">
        <h2>Work with me</h2>
        <p>Send me a message and lets chat!</p>
        <form class="contact-form" @submit.prevent="handleSubmit" ref="form">
          <div class="form-group">
            <input type="email" v-model="fromEmail" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <input type="text" v-model="subject" placeholder="Subject" required>
          </div>
          <div class="form-group">
            <textarea v-model="message" placeholder="Your Message" required></textarea>
          </div>
          <div class="form-group ">
            <button type="submit" id="button-style">Send Message</button>
          </div>
        </form>
      </section>

      <div class="social-media-links">
        <a href="https://github.com/lucasamagno" target="_blank" class="icon-link">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/lucasamagno" target="_blank" class="icon-link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://medium.com/@lucasmagno" target="_blank" class="icon-link">
          <i class="fab fa-medium"></i>
        </a>
      </div>
    </div>


    <div class="content">
      <section id="about">
        <h2>About Me</h2>
        <p>Hello and welcome! </p>
        <p>
          I'm Lucas, a Full Stack Software Engineer and 2020 graduate of Central Michigan University's Computer Science program. 
          Over the last 3 years, I have been actively pursuing freelance work and building technology in the real estate and mortgage industries. 
          On the side, I work with and mentor students from low-income and underprivelged communities. 
          I also enjoy snowboarding, making kombucha, and traveling with my girlfriend.
        </p>
      </section>

      <hr>

      <section id="experience">
        <h2>Work Experience</h2>
        
        <div v-for="experience in experiences" :key="experience.id">
          <work-experience-card :experience="experience" />
        </div>
        <div class="experience-button">
          <a href="https://drive.google.com/file/d/1EMLM_gmHWMIMxVqmUj3rH782DMLb7t9v/view?usp=sharing" target="_blank" class="resume-button">View Full Resume</a>
        </div>
      </section>

      <hr>

      <section id="projects">
        <h2>Projects</h2>
        <div v-for="project in projects" :key="project.id">
          <project-card :project="project" />
        </div>
        <div class="experience-button">
          <a href="https://lucasamagno.github.io/myblog" target="_blank" class="resume-button">View Blog</a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  overflow-y: hidden;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  font-family: 'Inter', sans-serif; 
  font-size: 16px;
  color: #666;
}

.sidebar {
  width: 50%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: hidden;
  height: 100vh;
  padding-top: 5%;
}

.content {
  padding-top: 5%;
  text-align: left;
  margin-left: 50%;
  width: 50%;
  overflow-y: auto;
  height: calc(100vh - 10%);
  padding-right: 10%;
}

h1 {
  font-size: 50px;
  padding: 0;
  margin: 0;
}

#hero {
  text-align: left;
  padding-left: 30%;
  padding-right: 10%;
}

hr {
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin-top: 30px;
  margin-bottom: 20px;
}

.icon-link {
  color: grey;
  transition: color 0.3s;
  margin-right: 30px;
  font-size: 30px;
}

.icon-link:hover {
  color: white; 
}

.social-media-links {
  position: absolute;
  bottom: 15%;
  left: 30%;
}

#contact {
  margin-top: 7%;
  text-align: left;
  padding-left: 30%;
  padding-right: 10%;
}

.contact-form .form-group {
  margin-bottom: 15px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 75%;
  font-size: 16px;
  font-family: 'Inter';
}

.contact-form textarea {
  height: 100px;
  resize: vertical;
}

.contact-form button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.contact-form button:hover {
  background-color: #45a049;
}

.experience-button {
  display: flex;
  flex-direction: column;
  align-items: center; 
}


.resume-button {
  display: inline-block;
  background-color: #007bff; 
  color: white; 
  padding: 10px 20px; 
  margin-top: 20px;
  border-radius: 15px; 
  font-size: 16px; 
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease; 
}

.resume-button:hover {
  background-color: #0056b3;
}

h2 {
  font-weight: 500;
  opacity: 80%;
}

/* Mobile Phones: max-width of 767px */
@media (max-width: 767px) {
    .container {
        flex-direction: column;
        height: auto;
        overflow-y: auto; 
    }

    .sidebar {
        width: 100%; /* Full width */
        position: static; /* Adjust position for mobile */
        overflow-y: visible; /* Allow scrolling if needed */
        padding: 10px; /* Add padding on all sides */
        box-sizing: border-box; /* Include padding in the width calculation */
    }

    .content {
        width: 100%; /* Ensure content does not exceed the width of the screen */
        margin: 0;
        padding: 10px; /* Adjust padding to ensure content fits within the screen */
        box-sizing: border-box; /* Include padding and border in the element's width */
    }

    #hero, #contact {
        padding-left: 10px;
        padding-right: 10px;
    }

    .form-group input[type="email"],
    .form-group input[type="text"],
    .form-group textarea {
        width: 100%; /* Full width of the container */
        box-sizing: border-box; /* Include padding and border in the width */
    }

    #hero h1 {
        font-size: 36px;
    }

    #hero h3 {
        font-size: 25px;
    }

    .social-media-links {
        position: static;
        margin-top: 20px;
        text-align: center;
        padding-bottom: 20px;
    }

    .icon-link {
        margin-right: 15px;
        font-size: 24px;
    }

    .contact-form button,
    .resume-button, #button-style {
        font-size: 16px;
    }

    .contact-form .form-group {
        margin-bottom: 10px;
    }

    .contact-form button {
        width: 100%;
    }

    #cursor-gradient {
      display: block;
    }
}

/* Tablets: min-width of 768px and max-width of 1366px */
@media (min-width: 768px) and (max-width: 1366px) {
    .container {  
        display: flex;
        height: auto; 
        overflow-x: hidden;
    }

    .sidebar {
        width: 50%;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        overflow-y: auto;
    }

    .content {
        width: 50%; 
        margin-left: 50%; 
        position: relative;
        padding: 15px;
        overflow-y: auto;
        height: auto; 
    }

    #hero h1 {
        font-size: 45px;
    }

    #hero h3 {
        font-size: 30px;
    }

    .social-media-links {
        position: static;
        margin-top: 10px;
    }
    #cursor-gradient {
    display: block;
  }
}


#cursor-gradient {
  position: fixed;
  pointer-events: none;
  border-radius: 50%;
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(0, 191, 255, 0.5), rgba(0, 191, 255, 0));
  transform: translate(-50%, -50%);
  display: none;
  z-index: 1000;
  filter: blur(50px);
  opacity: 20%;
}

#button-style {
  background-color: #007bff;
  color: white; 
  padding: 10px 20px;
  border-radius: 15px; 
  font-size: 16px; 
  text-align: center;
  text-decoration: none; 
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#button-style:hover {
  background-color: #0056b3;
}
</style>
