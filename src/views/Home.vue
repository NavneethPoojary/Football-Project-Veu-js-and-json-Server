<template>
    <div v-if="players.length">
      <div v-for="player in players" :key="player.id">
        <SinglePlayer :player="player" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
</template>

<script>
import SinglePlayer from '../components/SinglePlayer.vue'
export default {
  name: 'Home',
  components: {SinglePlayer},
  data(){
    return{
      players:[],
    }
  },
  mounted(){
    fetch('http://localhost:3000/players')
    .then(res => res.json())
    .then(data => this.players=data)
    .catch(err=>console.log(err.message))
  },
  methods:{
    handleDelete(id){
      this.players=this.players.filter((player)=>{
        return this.player !==id
      })

    },
    handleComplete(id){
      let p=this.players.find(player=>{
        return player.id==id
      })
      p.complete= !p.complete
    }
  }
}
</script>
