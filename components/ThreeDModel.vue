<template>
    <div class="three-d-model-container" ref="modelContainer"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'ThreeDModel',
    props: {
      modelUrl: {
        type: String,
        required: true
      }
    },
    mounted() {
      this.initThreeDModel();
    },
    methods: {
      async initThreeDModel() {
        const container = this.$refs.modelContainer;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true pour fond transparent
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
  
        // Ajouter une lumière directionnelle
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);
  
        // Importer dynamiquement GLTFLoader
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader');
  
        // Charger et ajouter le modèle 3D
        const loader = new GLTFLoader();
        loader.load(this.modelUrl, (gltf) => {
          const model = gltf.scene;
          scene.add(model);
          this.animate(scene, camera, renderer, model);
        }, undefined, (error) => {
          console.error('Erreur lors du chargement du modèle GLTF:', error);
        });
  
        camera.position.z = 5;
      },
      animate(scene, camera, renderer, model) {
        const animate = () => {
          requestAnimationFrame(animate);
  
          // Faire tourner le modèle
          if (model) {
            model.rotation.y += 0.01; // Ajustez cette valeur pour modifier la vitesse de rotation
          }
  
          renderer.render(scene, camera);
        };
        animate();
      }
    }
  }
  </script>
  
  <style scoped>
  .three-d-model-container {
    width: 100%;
    height: 500px; /* Ajustez la hauteur selon vos besoins */
    border: 1px solid #ccc;
  }
  </style>
  