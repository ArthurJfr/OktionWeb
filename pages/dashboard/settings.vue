<template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>

            <h1>Settings</h1>
            <h4>{{localStorageContent}}</h4>
        </MainContent>

          <nuxt-child />
      </div>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';
  import MainContent from '@/components/MainContent.vue';
  import auth from '~/middleware/auth';


  
  export default {
    middleware  : 'auth',
    

    components: {
      SideBar,
      MainContent
    },
    data() {
    return {
      localStorageContent: ''
    }
  },
  mounted() {
    if (process.client) {
      this.localStorageContent = JSON.stringify(localStorage, null, 2);
    }
  }
}
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
  