<template>
    <div class="middleContainer">
        <nuxt-link class="linkTo" to="/">Home</nuxt-link>
        <nuxt-link class="linkTo" to="/landings/about">A propos</nuxt-link>
    </div>
   
</template>
<script>
 

   export default {
     name: 'MiddleNav',
     components : {
         
     }
   
 
   }
</script>
   
<style scoped>

    .middleContainer{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        font-size: 18px;
        
    }
    .linkTo{
        text-decoration: none;
        color: gray ;
        transition: all 0.5s;
    }

    .linkTo:hover{
        text-decoration: none;
        z-index: 2;
        scale: 1.1;
        color: var(--primary-color) ;
    }
</style>
   