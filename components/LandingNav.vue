<template>
   <header class="oktionHeader">
        <nav>
            <ul>
                <li class="headerItem"><OktionLogo/></li>
                <li class="headerItem"><MiddleNav /></li>
                <li class="headerItem">
                  <NavButton :buttonText="buttonText" :buttonLink="buttonLink" />              
                </li>
            </ul>  
        </nav>
   </header>
  </template>
  
  <script>

import OktionLogo from './OktionLogo.vue';
import MiddleNav from './MiddleNav';
import NavButton from './NavButton';
  export default {
    name: 'LandingNav',
    components : {
        OktionLogo,
        MiddleNav,
        NavButton,
        props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    }
  }
    }
  

  }
  </script>
  
  <style scoped>

header {
    padding: 30px;
}
    ul {
       
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }

    .headerItem {
        display: flex;
        align-items: center;
        list-style-type: none;
        text-decoration: none;
    }
  </style>
  