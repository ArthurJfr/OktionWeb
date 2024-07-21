<template>
    <div>
        <LandingNav buttonText="Se connecter" buttonLink="/auth/login"  />
            <div class="hero-register">
                <div class="leftLogin">
                    <p class="slog">S'inscrire</p>
                    <RegisterForm />
                </div>
                <div class="rightLogin">
                </div>
    
            </div>
    
        </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LandingNav from '~/components/landings/LandingNav.vue';
import RegisterForm from '~/components/auth/RegisterForm.vue';


export default Vue.extend({
name: 'Register',
middleware: 'redirectIfAuthenticated',
components : {
    LandingNav, 
    RegisterForm
}
})
</script>
<style scoped>
.hero-register{
    display: flex;
    flex-direction: row;
    width: 80%;
    min-height: 50vh;
    align-items: center;
    margin : 0 auto;
    padding: 4rem 2rem;
}
.leftLogin{
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    width: 50%;
    padding: 10px;




 

}
.rightLogin{

   width: 50%;
    padding: 10px;
}
</style>