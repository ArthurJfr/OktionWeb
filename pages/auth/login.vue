<template>
    <div>
    <LandingNav buttonText="S'inscrire" buttonLink="/auth/register"  />
        <div class="hero-login">
            <div class="leftLogin">
                <ThreeDModel modelUrl="/_nuxt/assets/models/01b0af5b6eca73914a044ac547bbe2d7.gltf" />

            </div>
            <div class="rightLogin">
                <p class="slog">Se connecter</p>
                <LoginForm />

            </div>

        </div>

    </div>

</template>

<script lang="ts">
import Vue from 'vue';
import LandingNav from '~/components/landings/LandingNav.vue';
import LoginForm from '~/components/auth/LoginForm.vue';
import ThreeDModel from '~/components/ThreeDModel.vue';





export default Vue.extend({
name: 'Login',
components : {
    LandingNav,
    LoginForm,
    ThreeDModel
},
created() {
    console.log("Chemin du modèle:", require('~/assets/threeD/glass_loader.gltf'));
  },

})
</script>

<style scoped>
.hero-login{
    display: flex;
    flex-direction: row;
    width: 80%;
    min-height: 50vh;
    align-items: center;
    margin : 0 auto;
    padding: 4rem 2rem;
}
.leftLogin{
    width: 50%;
    padding: 10px;

}
.rightLogin{
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    width: 50%;
    padding: 10px;

}
</style>
