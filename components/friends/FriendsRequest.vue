<template>
    <div>
      <h3>Demandes d'Amis</h3>
      <ul>
        <li v-for="request in requests" :key="request.id">
          {{ request.sender.username }}
          <button @click="acceptRequest(request.id)">Accepter</button>
          <button @click="declineRequest(request.id)">Refuser</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      requests: {
        type: Array,
        required: true,
      },
    },
    methods: {
      async acceptRequest(requestId) {
        try {
          await this.$axios.post(`http://localhost:4000/friends/accept/${requestId}`);
          this.$emit('request-handled');
        } catch (error) {
          console.error('Erreur lors de l\'acceptation de la demande:', error);
        }
      },
      async declineRequest(requestId) {
        try {
          await this.$axios.post(`http://localhost:4000/friends/decline/${requestId}`);
          this.$emit('request-handled');
        } catch (error) {
          console.error('Erreur lors du refus de la demande:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  button {
    margin-left: 10px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  button:first-child {
    background-color: #28a745;
    color: white;
  }
  
  button:first-child:hover {
    background-color: #218838;
  }
  
  button:last-child {
    background-color: #dc3545;
    color: white;
  }
  
  button:last-child:hover {
    background-color: #c82333;
  }
  </style>
  