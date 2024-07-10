<template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <div class="content">
          <nuxt-child />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';

  
  export default {
    
    components: {
      SideBar
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
    padding-top: 60px;
  }
  
  .content {
    padding: 20px;
  }
  </style>
  