<template>
    <div class="auction-form">
      <div class="topAddAuction">
        <h2 class="pagetitle">Créer une Enchère</h2>
        <p><font-awesome-icon :icon="['fas', 'xmark']" @click="closeModal" /></p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="startDate">Date de début</label>
          <input type="datetime-local" id="startDate" v-model="form.startDate" required />
        </div>
        <div class="form-group">
          <label for="endDate">Date de fin</label>
          <input type="datetime-local" id="endDate" v-model="form.endDate" required />
        </div>
        <div class="form-group">
          <label for="type">Type d'enchère</label>
          <select id="type" v-model="form.type" required>
            <option value="traditional">Traditionnelle</option>
            <option value="blind">À l'aveugle</option>
          </select>
        </div>
        <button class="actionButton" type="submit">Créer</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      productId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        form: {
          startDate: '',
          endDate: '',
          type: 'traditional'
        }
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await this.$axios.post('http://localhost:4000/auctions', { ...this.form, productId: this.productId });
          this.$emit('auctionCreated', response.data);
          this.resetForm();
          this.closeModal();
        } catch (error) {
          console.error('Erreur lors de la création de l\'enchère:', error);
        }
      },
      resetForm() {
        this.form = {
          startDate: '',
          endDate: '',
          type: 'traditional'
        };
      },
      closeModal() {
        this.$root.$emit('close-modal');
      }
    }
  };
  </script>
  
  <style scoped>
  .auction-form {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .topAddAuction {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .topAddAuction p {
    font-size: 25px;
    cursor: pointer;
    transition: all 0.4s;
    color: var(--primary-color);
  }
  .topAddAuction p:hover {
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
  
  input, select {
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
  