import { createApp } from 'vue'

import './scss/general.scss'

import 'bootstrap'

import App from './App.vue'
import { router } from './routes'


createApp(App).use(router).mount('#app')