<template>
      <div class="container">
         <OktionLogo />
        <ul>
            
          <li>
            <nuxt-link to="/dashboard/overview">
              Accueil
            </nuxt-link>
          </li>
          <li >
            <nuxt-link to="/dashboard/auctions">
              Enchères
            </nuxt-link>
          </li>
          <li >
            <nuxt-link to="/dashboard/sales">
              Mes ventes
            </nuxt-link>
          </li>
          <li >
            <nuxt-link to="/dashboard/new">
              Nouveautés
            </nuxt-link>
          </li>
          <li >
            <nuxt-link to="/dashboard/friends">
              Amis
            </nuxt-link>
          </li>
          <li >
            <nuxt-link to="/dashboard/settings">
              Paramètre
            </nuxt-link>
          </li>
        </ul>
        <div class="logout">
          <nuxt-link to="/logout">
            Déconnexion
          </nuxt-link>
        </div>
      </div>
  </template>
  
  <script>

  import OktionLogo from "./landings/OktionLogo";
  export default {
    name: 'Sidebar',
    data() {
      return {
        isOpen: false
      };
    },
    components : {
        OktionLogo
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      },
      isActive(path) {
        return this.$route.path === path;
      }
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
    flex-direction: column;
    align-items: center;
    top: 0;
    margin : 20px;
    padding: 20px;
    transition: left 0.5s;
    z-index: 1000;
   
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
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  
   ul li.active a {
    color: #007bff;
  }
  
   ul li a:hover {
    color: #007bff;
  }
  
  .logout {
    margin-top: auto;
  }
  
  .logout a {
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  
  .logout a:hover {
    color: #e74c3c;
  }
  
  @media (max-width: 768px) {
   
  
    .container{
      left: -250px;
      transition: left 0.5s;
    }
  }
  </style>
  