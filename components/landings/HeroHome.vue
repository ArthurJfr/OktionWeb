<template>
   <main class="hero-container">
        <div class="leftHero">
            <p class="slog">Allons-y</p>
            <p class="txtcontent">Vendre et acheter des biens aux enchères n'a jamais été aussi simple grâce à Oktion. <br/>  </p>
            <p class="txtcontent">Créer un compte et rejoignez notre communautée d'enchérisseurs 😇</p>
            <div class="btndiv">
                <NavButton buttonText="Créer un compte" buttonLink="/auth/register" />
            </div>
        </div>
        <div class="rightHero"></div>
   </main>
</template>
<script>
 import NavButton from '~/components/landings/NavButton.vue';


   export default {
     name: 'HeroHome',
     components : {
         NavButton
     }
   
 
   }
</script>
   
<style scoped>
.hero-container {
    display: flex;
    flex-direction: row;
    width: 80%;
    min-height: 50vh;
    align-items: center;
    margin : 0 auto;
    padding: 4rem 2rem;
}
.leftHero{
    display: flex;
    padding: 10px;
    flex-direction: column;
    width: 50%;
}
.rightHero{
    padding: 10px;

    width: 50%;
}

.txtcontent {
    font-size: 24px;
}
.btndiv{
    width: 100%;
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
   