<template>
  <div>
    <h1>Liste des amis</h1>
    <ul v-if="friends.length">
      <li class="friendList" v-for="friend in friends">
        <div class="basicsCard friend">
          <p class="username">{{ friend.username }}</p>
          <p>{{ friend.role }}</p>
        </div>
        <button class="delete" @click="removeFriend(friend.id)">Supprimer</button>
      </li>
    </ul>
    <p v-else>Aucun ami trouvé</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [],
    };
  },
  methods : {
    async removeFriend(friendId) {
      try {
        await this.$axios.delete(`http://localhost:4000/friends/remove/${friendId}`);
        this.friends = this.friends.filter(friend => friend.id !== friendId);
        console.log(`Ami avec l'ID ${friendId} supprimé.`);
      } catch (error) {
        console.error(`Erreur lors de la suppression de l'ami avec l'ID ${friendId}:`, error);
      }
    }
  },
  async created() {
    if(process.client){
         try {
      const response = await this.$axios.get('http://localhost:4000/friends');
      this.friends = response.data;
      console.log(this.friends);
    } catch (error) {
      console.error('Erreur lors de la récupération des amis:', error);
    }
    }
 
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
.username  {
   color: var(--primary-color);
}
.friendList{

  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  transition: all 0.5s;
  width: 80%;

}
.friend{
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
 
}
.friendList:hover{
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
</style>
