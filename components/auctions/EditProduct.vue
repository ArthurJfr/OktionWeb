<template>
    <div class="product-form">
      <div class="topAddProduct">
        <h2 class="pagetitle">Modifier le Produit</h2>
        <p><font-awesome-icon :icon="['fas', 'xmark']" @click="closeModal" /></p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input type="text" v-model="form.name" placeholder="Nom du produit" />
        </div>
        <div class="form-group">
          <select id="category" v-model="form.category" required>
            <option value="" disabled>Choisissez une catégorie</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <input type="number" id="startingPrice" v-model="form.startingPrice" placeholder="Prix de Départ" required />
        </div>
        <div class="form-group">
          <textarea placeholder="Description" id="description" v-model="form.description" required></textarea>
        </div>
        <div class="form-group">
          <input type="url" id="imageUrl" v-model="form.imageUrl" placeholder="URL de l'image" />
        </div>
        <button class="actionButton" type="submit">Modifier</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      productId: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        form: {
          name: '',
          category: '',
          startingPrice: '',
          description: '',
          imageUrl: ''
        },
        categories: ['Electronique', 'Maison', 'Mode', 'Accessoires', 'Sports', 'Jouets', 'Autre'] // Ajoutez vos catégories ici
      };
    },
    methods: {
      async fetchProduct() {
        try {
          const token = localStorage.getItem('token'); // Récupérer le token JWT depuis le localStorage
          const response = await axios.get(`/products/${this.productId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          this.form = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération du produit:', error);
        }
      },
      async handleSubmit() {
        try {
          const token = localStorage.getItem('token'); // Récupérer le token JWT depuis le localStorage
          const response = await axios.put(`/products/${this.productId}`, this.form, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          this.$emit('productUpdated', response.data);
          this.resetForm();
          this.closeModal();
        } catch (error) {
          console.error('Erreur lors de la modification du produit:', error);
        }
      },
      resetForm() {
        this.form = {
          name: '',
          category: '',
          startingPrice: '',
          description: '',
          imageUrl: ''
        };
      },
      closeModal() {
        this.$root.$emit('close-modal');
      }
    },
    created() {
      this.fetchProduct();
    }
  };
  </script>
  
  <style scoped>
  .product-form {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .topAddProduct {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .topAddProduct p {
    font-size: 25px;
    cursor: pointer;
    transition: all 0.4s;
    color: var(--primary-color);
  }
  .topAddProduct p:hover {
    transform: scale(1.05);  
    color: var(--black-color);   
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, textarea, select {
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
    padding: 1rem 2rem;
    border: 2px solid black;
    border-radius: 16px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  