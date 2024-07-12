<template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>
            <h1>Amis</h1>
            <button @click="showAddFriendModal">Ajouter des amis</button>
            
        </MainContent>
        <Modal :visible="isAddFriendModalVisible" @close="hideAddFriendModal">
          <FriendSearch />
        </Modal>
      </div>
    </div>
  </template>
  

  Voici comment adapter votre fichier friends.vue existant pour inclure les fonctionnalités de demande d'amis avec une modal, tout en utilisant votre structure actuelle :

  pages/dashboard/friends.vue
  vue
  Copier le code
  <template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>
          <h1>Amis</h1>
          <button @click="showAddFriendModal">Ajouter des amis</button>
          <FriendRequests 
            :requests="friendRequests"
            @request-handled="loadFriendRequests"
          />
          <FriendsList 
            :friends="friends"
            @start-conversation="startConversation"
            @remove-friend="removeFriend"
            :pageSize="20"
          />
        </MainContent>
      </div>
      <Modal :visible="isAddFriendModalVisible" @close="hideAddFriendModal">
        <FriendsSearch />
      </Modal>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';
  import MainContent from '@/components/MainContent.vue';
  import FriendsSearch from '@/components/friends/FriendsSearch.vue';
  import FriendsList from '@/components/friends/FriendsList.vue';
  import Modal from '@/components/Modal.vue';
  import axios from 'axios';
  
  export default {
    components: {
      SideBar,
      MainContent,
      FriendsSearch,
    
      FriendsList,
      Modal,
    },
    data() {
      return {
        friends: [],
        friendRequests: [],
        searchQuery: '',
        totalPages: 1,
        currentPage: 1,
        isAddFriendModalVisible: false,
      };
    },
    async fetch() {
      await this.loadFriends();
      await this.loadFriendRequests();
    },
    methods: {
      async loadFriends(page = 1) {
        try {
          const response = await axios.get(`http://localhost:4000/friends?page=${page}`);
          this.friends = response.data.friends;
          this.totalPages = response.data.totalPages;
          this.currentPage = page;
        } catch (error) {
          console.error('Erreur lors du chargement des amis:', error);
        }
      },
      async loadFriendRequests() {
        try {
          const response = await axios.get('http://localhost:4000/friends/requests');
          this.friendRequests = response.data;
        } catch (error) {
          console.error('Erreur lors du chargement des demandes d\'amis:', error);
        }
      },
      async removeFriend(friendId) {
        try {
          await axios.delete(`http://localhost:4000/friends/remove/${friendId}`);
          this.loadFriends(this.currentPage);
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'ami:', error);
        }
      },
      startConversation(friendId) {
        this.$router.push(`/chat/${friendId}`);
      },
      showAddFriendModal() {
        this.isAddFriendModalVisible = true;
      },
      hideAddFriendModal() {
        this.isAddFriendModalVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
  }
  
  .main-content {
    margin-left: 250px;
    width: calc(100% - 250px);
  }
  
  .content {
    padding: 20px;
  }
  </style>
  