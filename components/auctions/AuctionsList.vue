<template>
    <div>
      <div class="section ongoing">
        <h2>Enchères en cours</h2>
        <ul class="auctionsContainer" v-if="auctionsOngoing.length">
          <li class="auctionList" v-for="auctionon in auctionsOngoing" :key="auctionon.auction._id">
            <div class="basicsCard auction">
              <div class="imgdiv">
                <img :src="auctionon.product.imageUrl" alt="Product Image" />
              </div>
              <div class="namedesc">
                <p class="productname">{{ auctionon.product.name }}</p>
                <p>{{ auctionon.product.category }}</p>
                <p>type d'enchère : {{auctionon.auction.type}}</p>

                <h5 class="price" >{{ auctionon.product.startingPrice }}.00€</h5>
              </div>
            </div>
          </li>
        </ul>
        <p v-else>Aucune enchère en cours trouvée</p>
        <div class="button-container">
          <button @click="loadMoreOngoing" class="actionButton">Voir plus</button>
        </div>
      </div>
  
      <div class="section ending">
        <h2>Bientôt finies</h2>
        <ul class="auctionsContainer" v-if="auctionsEnding.length">
          <li class="auctionList" v-for="auctionend in auctionsEnding" :key="auctionend.auction._id">
            <div class="basicsCard auction">
              <div class="imgdiv">
                <img :src="auctionend.product.imageUrl" alt="Product Image" />
              </div>
              <div class="namedesc">
                <p class="productname">{{ auctionend.product.name }}</p>
                <p>{{ auctionend.product.category }}</p>
                <p>type d'enchère : {{auctionend.auction.type}}</p>
                <p>{{ auctionend.product.startingPrice }}.00€</p>
              </div>
            </div>
          </li>
        </ul>
        <p v-else>Aucune enchère bientôt finie</p>
        <div class="button-container">
          <button @click="loadMoreEnding" class="actionButton">Voir plus</button>
        </div>
      </div>
  
      <div class="section upcoming">
        <h2>Enchères à venir</h2>
        <ul class="auctionsContainer" v-if="auctionsUpComing.length">
          <li class="auctionList" v-for="auctionup in auctionsUpComing" :key="auctionup.auction._id">
            <div class="basicsCard auction">
              <div class="imgdiv">
                <img :src="auctionup.product.imageUrl" alt="Product Image" />
              </div>
              <div class="namedesc">
                <p class="productname">{{ auctionup.product.name }}</p>
                <p>{{ auctionup.product.category }}</p>
                <p>type d'enchère : {{auctionup.auction.type}}</p>
                <p></p>
                <p class="price" >{{ auctionup.product.startingPrice }}.00€</p>
                
              </div>
            </div>
          </li>
        </ul>
        <p v-else>Aucune enchère à venir trouvée</p>
        <div class="button-container">
          <button @click="loadMoreUpcoming" class="actionButton">Voir plus</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Modal from '../Modal.vue';
  import CreateAuction from './CreateAuction.vue';
  import EditProduct from './EditProduct.vue';
  
  export default {
    data() {
      return {
        products: [],
        auctions: [],
        auctionsEnding: [],
        auctionsOngoing: [],
        auctionsUpComing: [],
  
        isEditProductModalVisible: false,
        isAddAuctionModalVisible: false,
        isDeleteProductModalVisible: false,
        selectedProductId: null
      };
    },
    components: {
      Modal,
      EditProduct,
      CreateAuction
    },
    methods: {
      async loadAuctionOnGoing() {
        try {
          const response = await this.$axios.get('http://localhost:4000/auctions/ongoing');
          this.auctionsOngoing = response.data;
          console.log(this.products);
        } catch (error) {
          console.error('Erreur lors de la récupération des encheres ongoing:', error);
        }
      },
      async loadAuctionEndingSoon() {
        try {
          const response = await this.$axios.get('http://localhost:4000/auctions/ending-soon');
          this.auctionsEnding = response.data;
          console.log(this.products);
        } catch (error) {
          console.error('Erreur lors de la récupération des encheres endingsoon :', error);
        }
      },
      async loadAuctionUpComing() {
        try {
          const response = await this.$axios.get('http://localhost:4000/auctions/upcoming');
          this.auctionsUpComing = response.data;
          console.log(this.products);
        } catch (error) {
          console.error('Erreur lors de la récupération des encheres upcoming:', error);
        }
      },
      loadMoreOngoing() {
        // Logic to load more ongoing auctions
      },
      loadMoreEnding() {
        // Logic to load more ending auctions
      },
      loadMoreUpcoming() {
        // Logic to load more upcoming auctions
      }
    },
    async created() {
        if(process.client){
        this.loadAuctionEndingSoon();
        this.loadAuctionOnGoing();
        this.loadAuctionUpComing();
        }

    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .section {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .auctionsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
  }
  
  .namedesc {
    display: flex;
    flex-direction: column;
    
    align-items: flex-start;
  }
  
  .username {
    color: var(--primary-color);
  }
  .productname{
    font-size: 22px;
    font-weight: bold;
    color: black;

  }
  .price {
    font-weight: bold;
    font-size: 18px;
  }
  .imgdiv {
    height: 200px;
    width: 100%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .imgdiv img {
    max-height: 100%;
    max-width: 100%;
  }
  
  .auctionList {
    flex: 1 1 calc(25% - 20px);
    max-width: calc(25% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s;
    cursor: pointer;
  }
  
  .auction {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  

  
  p {
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    text-align: center;
    color: #888;
  }
  
  .button-container {
    margin-top: 20px;
    text-align: center;
  }
  
  .load-more {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .load-more:hover {
    background: #0056b3;
  }
  </style>
  