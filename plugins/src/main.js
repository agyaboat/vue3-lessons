import { createApp } from 'vue'
import App from './App.vue'
import Hello from './plugins/hello'

const app = createApp(App)
app.use(Hello)
app.mount('#app')
