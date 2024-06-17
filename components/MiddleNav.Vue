<template>
    <div class="middleContainer">
        <nuxt-link class="linkTo" to="/">Home</nuxt-link>
        <nuxt-link class="linkTo" to="/">About</nuxt-link>
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
    }
</style>
   