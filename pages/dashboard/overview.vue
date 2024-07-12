<template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>


        </MainContent>

          <nuxt-child />
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';
  import MainContent from '@/components/MainContent.vue';


  
  export default {
    
    components: {
      SideBar,
      MainContent
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
  