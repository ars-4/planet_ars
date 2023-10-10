<template>
  <div class="wrapper" v-if="!initialized">
    <span class="icon icon-spinner"></span>
  </div>

  <canvas ref="canvas"></canvas>
  <button class="sss icon icon-arrow-up2" ref="moveBtn" @click="moveCamera" v-if="cameraStage == 2"></button>

  <div class="main about-me" v-if="cameraStage == 0">
    <AboutComponent @move-camera="moveCamera()" />
  </div>

  <div class="main project-me" v-else-if="cameraStage == 1">
    <ProjectsComponent @move-camera="moveCamera()" />
  </div>

  <div class="main contact-me" v-else-if="cameraStage == 2">
    <contactComponent @move-camera="moveCamera()" />
  </div>
</template>

<style>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #42b983;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .icon {
  font-size: 82px;
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.main {
  position: fixed;
  top: 15%;
  right: 3%;
}

.sss {
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 30px;
  aspect-ratio: 1/1;
  border-radius: 100%;
  cursor: pointer;
  border: none;
  z-index: 2;
  background-color: #42b983;
  font-weight: bolder;
  cursor: pointer;
}

.main.about-me {
  width: 25%;
  padding: 20px;
  border-radius: 4px;
  color: #fff;
  /* background-color: rgba(0, 0, 0, 0.5); */
}

.main.project-me,
.main.contact-me {
  width: 90%;
  top: 10%;
  padding: 20px;
  border-radius: 4px;
}

@media screen and (max-width: 768px) {
  .main.about-me {
    width: 85%;
    text-align: center;
  }

  .main.contact-me {
    top: 1%;
    left: 0;
    width: 100%;
  }

  .sss {
    width: 50px;
  }

  .wrapper .icon {
    font-size: 30px;
  }
}
</style>

<script>

import stars from '@/assets/stars.jpg'
import AboutComponent from '@/components/aboutComponent.vue'
import ProjectsComponent from '@/components/projectsComponent.vue'
import contactComponent from '@/components/contactComponent.vue'

export default {
  name: 'HomeView',

  data() {
    return {
      renderer: null,
      initialized: false,
      movingCamera: false,
      cameraStage: 0,
      cameraSpeed: 0.1,
      cameraPosition: {
        x: 0,
        y: 0,
        z: 0
      }
    };
  },

  components: {
    AboutComponent,
    ProjectsComponent,
    contactComponent
  },

  methods: {

    init: async function () {
      this.renderer = new this.$THREE.WebGLRenderer({
        canvas: this.$refs.canvas,
        // antialias: true,
        // alpha: true
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      window.addEventListener('resize', () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      })

      const loader = new this.$THREE.CubeTextureLoader();
      // loader.setPath('textures/cube/pisa/');
      const textureCube = loader.load([
        stars, stars, stars,
        stars, stars, stars
      ]);


      this.scene = new this.$THREE.Scene();
      this.scene.background = textureCube;
      this.scene.backgroundIntensity = 0.1;

      this.camera = new this.$THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.z = 50;

      this.controls = new this.$OrbitControls(this.camera, this.renderer.domElement);

      this.ambientLight = new this.$THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(this.ambientLight);


      this.gltfLoader = new this.$GLTFLoader();
      this.orbiter = null;
      this.home_one_url = new URL('../assets/models/orbiter.glb', import.meta.url);
      await this.gltfLoader.load(this.home_one_url.href, (gltf) => {
        this.model = gltf.scene;
        this.orbiter = gltf.scene;
        this.scene.add(this.model);
        this.model.position.set(-25, 0, 20);
        this.model.scale.set(1, 1, 1);
        this.model.rotation.z = 1;
      }, undefined, (error) => {
        console.error(error);
      });

      this.moon = null;
      this.moon_model_url = new URL('../assets/models/moon.glb', import.meta.url);
      await this.gltfLoader.load(this.moon_model_url.href, (gltf) => {
        this.moon = gltf.scene;
        this.scene.add(this.moon);
        this.moon.position.set(0, -25, 20);
        this.moon.scale.set(0.5, 0.5, 0.5);
        this.moon.rotation.z = 1;
      }, undefined, (error) => {
        console.error(error);
      });

      this.earth = null;
      this.earth_model_url = new URL('../assets/models/earth.glb', import.meta.url);
      await this.gltfLoader.load(this.earth_model_url.href, (gltf) => {
        this.earth = gltf.scene;
        this.scene.add(this.earth);
        this.earth.position.set(0, -150, -250);
        this.earth.scale.set(0.5, 0.5, 0.5);
        this.earth.rotation.y = 1;
      }, undefined, (error) => {
        console.error(error);
      });

      this.saturn = null;
      this.saturn_model_url = new URL('../assets/models/saturn.glb', import.meta.url);
      await this.gltfLoader.load(this.saturn_model_url.href, (gltf) => {
        this.saturn = gltf.scene;
        this.scene.add(this.saturn);
        this.saturn.position.set(-250, -450, -450);
        this.saturn.scale.set(2500, 2500, 2500);
        this.saturn.rotation.y = 1;
      }, undefined, (error) => {
        console.error(error);
      });

      this.renderer.setAnimationLoop(this.animate)

      document.addEventListener('DOMContentLoaded', (e) => {
        setTimeout(() => {
          this.initialized = true
        }, 1000);
      })

    },

    moveCamera: function () {
      this.movingCamera = true
    },

    animate: function () {
      this.controls.update();
      if (this.orbiter) {
        this.orbiter.rotation.y += 0.0001
        this.orbiter.rotation.x += 0.01
      }
      if (this.earth) {
        this.earth.rotation.y += 0.001
      }
      if (this.movingCamera) {
        this.camera.position.y -= this.cameraSpeed;
        this.cameraPosition.y -= this.cameraSpeed;
        this.cameraPosition.x = this.camera.position.x
        this.cameraPosition.z = 0;
        this.camera.rotation.x = 0;
        if (this.camera.position.y <= -25 && this.cameraStage == 0) {
          this.movingCamera = false;
          this.camera.position.y = -25;
          this.camera.rotation.x = 0;
          this.cameraPosition.y = -25;
          this.cameraPosition.x = 0;
          this.cameraPosition.z = 0;
          this.cameraStage = 1;
          this.cameraSpeed = 0.75;
        } else if (this.camera.position.y <= -150 && this.cameraStage == 1 && this.movingCamera) {
          this.movingCamera = false;
          this.camera.position.y = -150;
          this.camera.rotation.x = 0;
          this.cameraPosition.y = -150;
          this.cameraPosition.x = 0;
          this.cameraPosition.z = 0;
          this.cameraStage = 2;
          this.cameraSpeed = 0.75;
        } else if (this.camera.position.y <= -250 && this.cameraStage == 2 && this.movingCamera) {
          console.log(this.movingCamera)
          this.movingCamera = false;
          this.camera.position.y = -0;
          this.camera.rotation.x = 0;
          this.cameraPosition.y = -0;
          this.cameraPosition.x = 0;
          this.cameraPosition.z = 0;
          this.cameraStage = 0;
        }
      }
      this.camera.lookAt(new this.$THREE.Vector3(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z));
      this.renderer.render(this.scene, this.camera);
    }

  },


  mounted() {
    this.init()
  }

};

</script>
