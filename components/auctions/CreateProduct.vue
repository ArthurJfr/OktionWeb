<template>
    <div class="product-form">
        <div class="topAddProduct">
            <h2 class="pagetitle">Créer un Produit</h2>
            <p><font-awesome-icon :icon="['fas', 'xmark']" @click="closeModal" /></p>
                 
        </div>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input type="text" v-model="form.name" placeholder="Nom du produit"  />
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
          
          <input type="url" id="imageUrl" v-model="form.imageUrl"  placeholder="URL de l'image"/>
        </div>
        <button class="actionButton" type="submit">Créer</button>
      </form>
    </div>
  </template>
  
  <script>

  export default {
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
      async handleSubmit() {
        try {
          const token = localStorage.getItem('token'); // Récupérer le token JWT depuis le localStorage
          const response = await this.$axios.post('/products', this.form, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          //this.$emit('productCreated', response.data);
          this.$root.$emit('close-modal');
          this.$emit('productCreated', response.data);

          
          this.resetForm();
        } catch (error) {
          console.error('Erreur lors de la création du produit:', error);
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
    justify-content:  space-between;
    align-items: center;
  }
  .topAddProduct p{
    font-size: 25px;
    cursor: pointer;
    transition: all 0.4s;
    color: var(--primary-color);
  }
  .topAddProduct p:hover{
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
  

  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  