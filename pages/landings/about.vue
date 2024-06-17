<template>
    <main>

           <LandingNav buttonText="Se connecter" buttonLink="/login"  />
    <p class="slog">A propos</p> 
    </main>

</template>

<script lang="ts">
import Vue from 'vue'
import LandingNav from '~/components/landings/LandingNav.vue';

export default Vue.extend({
name: 'About',
components : {
    LandingNav
}
})
</script>
