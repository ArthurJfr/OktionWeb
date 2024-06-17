<template>
    <LandingNav buttonText="S'inscrire" buttonLink="/register"  />

</template>

<script lang="ts">
import Vue from 'vue'
import LandingNav from '~/components/LandingNav.vue';

export default Vue.extend({
name: 'Login',
components : {
    LandingNav
}
})
</script>
