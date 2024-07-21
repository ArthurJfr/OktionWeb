  <template>
    <div class="dashboard">
      <SideBar />
      <div class="main-content">
        <MainContent>
          <div class="topbar">
            <h1 class="pagetitle">Amis</h1>
            <button class="addFriend" @click="showAddFriendModal">Ajouter</button>

          </div>

          <FriendRequest
            :requests="friendRequests"
            @request-handled="loadFriendRequests"
          />
          <FriendsList />
        </MainContent>
      </div>
      <Modal :visible="isAddFriendModalVisible" @close="hideAddFriendModal">
        <FriendsSearch />
      </Modal>
    </div>
  </template>
  
  <script>
  import SideBar from '@/components/SideBar.vue';
  import MainContent from '@/components/MainContent.vue';
  import FriendsSearch from '@/components/friends/FriendsSearch.vue';
  import FriendRequest from '@/components/friends/FriendsRequest.vue';

  import FriendsList from '@/components/friends/FriendsList.vue';
  import Modal from '@/components/Modal.vue';
  import axios from 'axios';
  
  export default {
    middleware : 'auth',
    components: {
      SideBar,
      MainContent,
      FriendsSearch,
      FriendRequest,
      FriendsList,
      Modal,
    },
    data() {
      return {
        friends: [],
        friendRequests: [],
        searchQuery: '',
        isAddFriendModalVisible: false,
      };
    },
    async fetch() {
      if(process.client){
        await this.loadFriendRequests();
      }
        
    },
    methods: {
      async loadFriendRequests() {
        
        try {
          const response = await this.$axios.get('http://localhost:4000/friends/requests');
          this.friendRequests = response.data;
        } catch (error) {
          console.error('Erreur lors du chargement des demandes d\'amis:', error);
        }
      },
      async removeFriend(friendId) {
        try {
          await this.$axios.delete(`http://localhost:4000/friends/remove/${friendId}`);
          this.loadFriends(this.currentPage);
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'ami:', error);
        }
      },
      startConversation(friendId) {
        this.$router.push(`/chat/${friendId}`);
      },
      showAddFriendModal() {
        this.isAddFriendModalVisible = true;
      },
      hideAddFriendModal() {
        this.isAddFriendModalVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>

  .topbar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .addFriend{
     width: 100px;
     border: none;
     color: white;
     border-radius: 8px;
     background-color: var(--black-color);
     height: 35px;
     cursor: pointer;
     font-size: 15px;
     font-weight: bold;
     padding: 10px;
     transition-duration: 0.5s;
  }
  .addFriend:hover{
    background-color: var(--primary-color);

 }
  .dashboard {
    display: flex;
  }
  
  .main-content {
    margin-left: 250px;
    width: calc(100% - 250px);
  }
  
  .content {
    padding: 20px;
  }
  </style>
  