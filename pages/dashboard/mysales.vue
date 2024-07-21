<template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>
          <div class="topbar">
            <h1 class="pagetitle">Mes ventes</h1>
          </div>
        </MainContent>
      </div>
 
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';
  import MainContent from '@/components/MainContent.vue';
  import Modal from '@/components/Modal.vue';
  import ProductsList from '@/components/auctions/ProductsList.vue';
  import CreateProduct from '~/components/auctions/CreateProduct.vue';

  import axios from 'axios';
  
  export default {
    middleware : 'auth',
    components: {
      SideBar,
      MainContent,
      ProductsList,
      Modal,
      CreateProduct
    },
    data() {
      return {
        products: [],
        
        
        isAddProductModalVisible: false,
      };
    },
    async fetch() {
        await this.loadProducts();
    },
    methods: {
      async loadProducts() {
      
      },

  
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
  