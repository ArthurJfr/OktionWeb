<template>
      <div class="container">
         <OktionLogo />
        <ul>
            
          <li>
            <nuxt-link class="txtnav" to="/dashboard/overview">
             <font-awesome-icon :icon="['fas', 'house']" /><p class="gapicon">Accueil</p>
            </nuxt-link>
          </li>
          <li >
            <nuxt-link class="txtnav" to="/dashboard/auctions">
               <font-awesome-icon :icon="['fas', 'layer-group']" /><p  class="gapicon">Enchères</p>
            </nuxt-link>
          </li>
          <li >
            <nuxt-link class="txtnav" to="/dashboard/mysales">
              <font-awesome-icon :icon="['fas', 'chart-pie']" /><p class="gapicon">Mes ventes</p> 
            </nuxt-link>
          </li>
          <li >
            <nuxt-link class="txtnav" to="/dashboard/news">
              <font-awesome-icon :icon="['fas', 'bell']" /><p class="gapicon">Nouveautés</p> 
            </nuxt-link>
          </li>
          <li >
            <nuxt-link class="txtnav" to="/dashboard/friends">
              <font-awesome-icon :icon="['fas', 'users']" /><p class="gapicon">Amis</p> 
            </nuxt-link>
          </li>
          <li >
            <nuxt-link class="txtnav" to="/dashboard/settings">
              <font-awesome-icon :icon="['fas', 'gears']" /><p class="gapicon">Paramètre</p>
            </nuxt-link>
          </li>
          <li >
            <nuxt-link class="txtnav" to="/dashboard/products">
              <font-awesome-icon :icon="['fas', 'tag']" /><p class="gapicon">Mes produits</p>
            </nuxt-link>
          </li>
        </ul>
        <div class="logout">
          <button class="txtnav" @click="showConfirmation" >
            Déconnexion
          </button>
        </div>
        <Modal :visible="isModalVisible" @close="hideConfirmation">
          <p>Etes-vous sûr de vouloir vous déconnecter ?</p>
          <button  @click="logout">Se déconnecter</button>
          <button @click="hideConfirmation">Annuler</button>
        </Modal>
      </div>
  </template>
  
  <script>

  import OktionLogo from "./landings/OktionLogo";
  import Modal from "./Modal";

  export default {
    name: 'Sidebar',
    data() {
      return {
        isOpen: false,
        isModalVisible : false
      };
    },
    components : {
        OktionLogo,
        Modal
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      },
      isActive(path) {
        return this.$route.path === path;
      },
      showConfirmation() {
      this.isModalVisible = true;
    },
    hideConfirmation() {
      this.isModalVisible = false;
    },
    logout() {
      try {
        localStorage.removeItem('token');
        localStorage.clear();
        localStorage.removeItem('expiryDate');
        localStorage.clear();

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('expiryDate');
        this.$router.push('/auth/login');
      } catch (err) {
        alert(err);
      }
    },

    }
  };
  </script>
  
  <style scoped>
  
  
  .container {
    width: 180px;
    height: calc(100vh - 75px);
    background-color: #F7F7F7;
    border : 1px solid #F7F7F7;
    color: var(--primary-color);
    border-radius: 16px;
    -webkit-box-shadow: 0px 0px 49px 0px rgba(0,0,0,0.47); 
    box-shadow: 0px 0px 49px 0px rgba(0,0,0,0.47);
    position: fixed;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    top: 0;
    margin : 20px;
    padding: 20px;
    transition: left 0.5s;
    z-index: 1000;
    transition: left 0.5s;
  }
  .gapicon{
    margin-left: 10px;
  }

  .logoutbtn{
    border: none;
    background-color: var(--primary-color);
    color: #FFF;
    cursor: pointer;
  }
  
 
  
  
   ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin: 20px 0;
  }
  
   ul li a {
    width: 100%;
    color: #7D7D7D;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  
  .logout {
    margin-top: auto;
  }
  

  
 
  
  @media (max-width: 768px) {
   
  
    .container{
      left: -250px;
      
    }
  }
  </style>
  