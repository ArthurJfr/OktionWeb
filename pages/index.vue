<template>     
          <LandingNav buttonText="Se connecter" buttonLink="/login"  />
  
</template>

<script lang="ts">
import Vue from 'vue'
import LandingNav from '~/components/LandingNav.vue';

export default Vue.extend({
  name: 'IndexPage',
  components : {
    LandingNav
  }

})
</script>
