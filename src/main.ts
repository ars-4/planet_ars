import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'

const app = createApp(App)

app.config.globalProperties.$THREE = THREE
app.config.globalProperties.$OrbitControls = OrbitControls
app.config.globalProperties.$GLTFLoader = GLTFLoader

app.config.globalProperties.$CSS3DObject = CSS3DObject
app.config.globalProperties.$CSS3DRenderer = CSS3DRenderer

app.use(router).mount('#app')
