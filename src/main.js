import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/desktop.css'
// import './form-DOM'
const app = createApp(App)

app.use(router)

app.mount('#app')
