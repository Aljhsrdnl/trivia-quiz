import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


const app = createApp({
  render: () => h(App)
})
// createApp(App).use(router).mount('#app')

app.use(router).mount('#app')