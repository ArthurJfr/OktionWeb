<template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>
          <div class="topbar">
            <h1 class="pagetitle">Enchères</h1>
          </div>
          <AuctionsList />
        </MainContent>
      </div>
    >
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';
  import MainContent from '@/components/MainContent.vue';
  import Modal from '@/components/Modal.vue';

  import axios from 'axios';
import AuctionsList from '~/components/auctions/AuctionsList.vue';
  
  export default {
    middleware : 'auth',
    components: {
      SideBar,
      AuctionsList,
      MainContent,
      Modal,
    },
    data() {
      return {
        
        
        
        isAddProductModalVisible: false,
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
    margin-bottom: 70px;
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
  