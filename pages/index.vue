<template>
  <div>
    <LandingNav buttonText="Se connecter" buttonLink="/auth/login"  />
    <HeroHome />

  </div>     

</template>

<script lang="ts">
import Vue from 'vue';
import LandingNav from '~/components/landings/LandingNav.vue';
import HeroHome from '~/components/landings/HeroHome.vue';



export default Vue.extend({
  name: 'IndexPage',
  components : {
    LandingNav,
    HeroHome,
    
  }

})
</script>
