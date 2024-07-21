<template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>
            <h1 class="pagetitle">Nouveautés</h1>
           

         

        </MainContent>
      </div>
     
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';
  import MainContent from '@/components/MainContent.vue';
  import FriendsSearch from '@/components/friends/FriendsSearch.vue';
  import FriendRequest from '@/components/friends/FriendsRequest.vue';

  import FriendsList from '@/components/friends/FriendsList.vue';
  import Modal from '@/components/Modal.vue';
  import axios from 'axios';
  
  export default {
    middleware : 'auth',
    components: {
      SideBar,
      MainContent,
      
    },
    data() {
      return {
      
      };
    },

    methods: {

    },
  };
  </script>
  
  <style scoped>

  .topbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

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
  