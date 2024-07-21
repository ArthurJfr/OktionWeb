<template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>
          <div class="topbar">
            <h1 class="pagetitle">Mes produits</h1>
            <button class="actionButton" @click="showAddProductModal">Créer un produit</button>
          </div>
          <ProductsList />
        </MainContent>
      </div>
      <Modal :visible="isAddProductModalVisible" @close="hideAddProductModal">
        <CreateProduct />
      </Modal>
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
        
        
        
        isAddProductModalVisible: false,
      };
    },
  
    methods: {
      showAddProductModal() {
        this.isAddProductModalVisible = true;
      },
      hideAddProductModal() {
        this.isAddProductModalVisible = false;
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
  