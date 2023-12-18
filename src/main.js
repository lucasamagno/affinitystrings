import { createApp } from 'vue'
import App from './App.vue'
import emailjs from 'emailjs-com'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

emailjs.init("EnT3Qfe4jqEM4H-Fl")

const app = createApp(App)

// Use Toast plugin
app.use(Toast, {});

app.mount('#app')
