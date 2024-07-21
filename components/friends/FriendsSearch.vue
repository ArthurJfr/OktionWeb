<template>
  <div>
    <h1>Ajouter un ami</h1>
    <form @submit.prevent="sendFriendRequest">
      <Input 
        v-model="searchQuery" 
        placeholder="A qui voulez vous l'envoyer ?" 
      />
      <button type="submit">Envoyer la demande</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import Input from '@/components/auth/Input.vue';

export default {
  components: {
    Input,
  },
  data() {
    return {
      searchQuery: '',
      message: '',
    };
  },
  methods: {
    async sendFriendRequest() {
      try {
        const response = await this.$axios.post('http://localhost:4000/friends/request', { friendUsername: this.searchQuery });
        this.message = 'Demande d\'ami envoyée avec succès!';
      } catch (error) {
        this.message = 'Erreur lors de l\'envoi de la demande d\'ami.';
      }
    },
  },
};
</script>

<style scoped>

div{
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
}

button {
  padding: 10px 20px;
  width: 250px;
  height: 50px;
  font-size: 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 20px;
}

button:hover {
  background-color: lightblue;
  color: black;
}


p {
  margin-top: 10px;
  color: green;
}
</style>
