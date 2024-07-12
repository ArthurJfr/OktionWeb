<template>
    <div class="scrollable-card">
        <div class="scrollable-card__content">
          <slot></slot>
        </div>
      </div>
</template>

<script>

export default {
  name: 'MainContent',


  methods: {
 
  }
};
</script>

<style scoped>


.container {
  width: calc(100vw - 270px);
  height: calc(100vh - 75px);
  background-color: #F7F7F7;
  border : 1px solid #F7F7F7;
  border-radius: 16px;

 

  z-index: 1000;
 
}


.scrollable-card {
    background-color: #F7F7F7;
    border-radius: 16px;
    -webkit-box-shadow: 0px 0px 49px 0px rgba(0,0,0,0.47); 
    box-shadow: 0px 0px 49px 0px rgba(0,0,0,0.47);
    overflow: hidden;
    min-height: calc(100vh - 35px);
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;


  }
  
  .scrollable-card__content {
    overflow-y: auto;
    padding: 25px;
  }

@media (max-width: 768px) {
 
    .scrollable-card{
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        width: calc(100vw - 20px);
    }

}
</style>
