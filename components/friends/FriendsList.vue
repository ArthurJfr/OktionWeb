<template>
    <div>
      <h2>Mes Amis</h2>
      <ul>
        <li v-for="friend in paginatedFriends" :key="friend.id">
          {{ friend.username }}
          <button @click="startConversation(friend.id)">Démarrer une conversation</button>
          <button @click="removeFriend(friend.id)">Supprimer</button>
        </li>
      </ul>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Précédent</button>
        <span>Page {{ currentPage }} sur {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      friends: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        default: 20
      }
    },
    data() {
      return {
        currentPage: 1
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.friends.length / this.pageSize);
      },
      paginatedFriends() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        return this.friends.slice(start, end);
      }
    },
    methods: {
      startConversation(friendId) {
        this.$emit('start-conversation', friendId);
      },
      removeFriend(friendId) {
        this.$emit('remove-friend', friendId);
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage += 1;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage -= 1;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .pagination button {
    margin: 0 10px;
    padding: 5px 10px;
  }
  </style>
‡  