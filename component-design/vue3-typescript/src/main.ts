import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useExampleCounterStore } from '@/stores/counter'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
router.beforeEach((to) => {
    // ✅ This will work make sure the correct store is used for the
    // current running app
    const counterStore = useExampleCounterStore(pinia)
    counterStore.icrementCounter()
  })
app.mount('#app')
