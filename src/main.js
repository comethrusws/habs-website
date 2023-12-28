import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App)
app.use(Vuetify)



createApp(App).use(router).mount('#app')
