<template>
    <div>    
      <ul v-if="products.length">
        <li class="productList" v-for="product in products">
          <div class="basicsCard product">
            <div class="imgdiv"><img  alt=""></div>
            <div class="namedesc" >
              <h3>{{ product.name }}</h3>
              <h4>{{ product.startingPrice }} €</h4>
              <p>{{ product.description }}</p>
            </div>
            <div class="namedesc">
                
            </div>
              <div class="listBtn">
            <button  v-if="!product.auction || product.auction.length === 0" class="sell" @click="openAuctionModal(product._id)">Vendre</button>
            <div class="auctionPresence" v-else>
              <p>Se termine le {{ formatDate(product.auction[0].endDate) }}</p>
              <p> Meilleur prix : {{ product.auction[0].highestBid }}</p>

            </div>
            <button class="actionButton" @click="showModalEdit">Modidier</button>
            <button class="delete" @click="showDeleteProductModal(product._id)">Supprimer</button>
          </div>
          </div>
        
        </li>
      </ul>
      <p v-else>Aucun produits trouvé</p>
      <Modal :visible="isEditProductModalVisible" @close="hideEditProductModal">
          <EditProduct /> 
      </Modal>
      <Modal :visible="isAddAuctionModalVisible" @close="hideAddAuctionModal">
        <CreateAuction :product-id="selectedProductId" @auctionCreated="handleAuctionCreated"/> 
    </Modal>

    <Modal :visible="isDeleteProductModalVisible" @close="hideDeleteProductModal">
      <div class="sure">

        <h4 class="txtsure1">Êtes vous sûr de vouloir supprmier ce produit ?</h4>
        <p class="txtsure">Si il est aux enchères, elle se supprimera automatiquement</p>
      </div>
      <div class="surebtn">
          <button class="deletelast" @click="removeProduct(selectedProductId)">Supprimer</button>
          <button class="cancel" @click="hideDeleteProductModal">Annuler</button>
      </div>
     

  </Modal>
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
        isEditProductModalVisible : false,
        isAddAuctionModalVisible : false,
        isDeleteProductModalVisible : false,
        selectedProductId : null
      };
    },
    components : {
      Modal,
      EditProduct,
      CreateAuction
    },
    methods : {
      async loadProducts() {
        try {
        const responseProducts = await this.$axios.get('http://localhost:4000/products');
        this.products = responseProducts.data;

        await Promise.all(
          this.products.map(async (product) => {                   
            const auctionResponse = await this.$axios.get(`http://localhost:4000/auctions/findbyproduct/${product._id}`);
            if (auctionResponse.data) {
              product.auction = auctionResponse.data;
              console.log(product.auction.length);
            }else {
              product.auction = [];
            }
            
          })
        );
        console.log(this.products);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
      },
      formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString('fr-FR', options);
    },
      async removeProduct(productId) {
        try {
          await this.$axios.delete(`http://localhost:4000/auctions/removeprod/${productId}`);
          
        // Vérifiez que `products` est défini avant d'appeler `.filter`
          if (Array.isArray(this.products)) {
          this.products = this.products.filter(product => product.id !== this.selectedProductId);
        } else {
          console.error('Erreur: `products` n\'est pas un tableau', this.products);
        }
          console.log(`Produit avec l'ID ${productId} supprimé.`);
          this.isDeleteProductModalVisible = false;
          this.loadProducts();
        } catch (error) {
          console.error(`Erreur lors de la suppression du produit avec l'ID ${productId}:`, error);
        }
      },

      showModalEdit() {
         this.isEditProductModalVisible = true;
      },
      hideEditProductModal(){
        this.isEditProductModalVisible = false;

      },
      openAuctionModal(productId){
        this.selectedProductId = productId;
        this.isAddAuctionModalVisible = true

      },
      showDeleteProductModal(productId){
       
        this.selectedProductId = productId;
        this.isDeleteProductModalVisible = true

      },
      hideAddAuctionModal(){
        this.isAddAuctionModalVisible = false
      },
      hideDeleteProductModal(){
        this.isDeleteProductModalVisible = false
      },
      handleAuctionCreated(auction) {
      console.log('Enchère créée avec succès:', auction);
      this.isAuctionModalVisible = false;
    },
    addProduct(newProduct) {
      console.log(newProduct);
      this.products.push(newProduct); // Ajoutez le produit à la liste
    }
      
    },
    async created() {
      if(process.client){
          this.loadProducts();
    this.$root.$on('productCreated', this.addProduct);
      }
  
    },
    beforeDestroy() {
    this.$root.$off('productCreated', this.addProduct); // Nettoyer l'écouteur d'événement
  },
  };
  </script>
  
  <style scoped>
  .surebtn{
    width: 100%;
    display:  flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
  }
  .txtsure1 {
    text-align: center;
    font-weight: 500;
  }
  .txtsure {
    text-align: center;
  }
  .sell {
    width: 150px;
    font-size: 15px;
    height: 35px;
    font-weight: bold;
    color: white;
    padding: 10px;
    background-color: green;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 8px;
    transition: all 0.5s;
  }
  .sell:hover{
    background-color: var(--black-color);
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  .namedesc{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .username  {
     color: var(--primary-color);
  }
  .imgdiv{
    height: 120px;
    width: 120px;
  }
  .listBtn{
    display: flex; 
    flex-direction:column;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
  }
  .auctionPresence{
        display: flex; 
    flex-direction:column;
    justify-content: center;
    align-items: flex-end;
    padding: 0;
  }
  .productList{
  
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    transition: all 0.5s;
    width: 90%;
    margin-top: 20px;
    
  
  }
  .product{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
   
  }
  .productList:hover{
    z-index: 1000;
    transform: scale(1.05);
    margin-top: 25px;
    margin-left: 30px;
  }
  p {
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    text-align: center;
    color: #888;
  }
  .deletelast{
    width: 130px;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    background-color: red;
    transition: all 0.5s;
    cursor: pointer;
  }
  .deletelast:hover {
    background-color: var(--black-color);
  }
  .cancel {
    width: 130px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    background-color: var(--primary-color);
    transition: all 0.5s;
    cursor: pointer;
  }
  .cancel:hover{
    background-color: var(--black-color);

  }
  </style>
