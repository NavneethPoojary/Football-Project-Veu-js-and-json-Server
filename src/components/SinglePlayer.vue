<template>
  <div class="player" :class="{complete: player.complete}">
    <div class="actions">
        <h3 @click="showDetails=!showDetails" >{{player.name}}</h3>
        <div class="icons">
           <router-link :to="{ name: 'EditPlayer', params: { id: player.id }}">
          <span class="material-icons">edit</span>
        </router-link>
            <span @click="deletePlayer" class="material-icons">delete</span>
            <span @click="toggleComplete" class="material-icons tick">done</span>
        </div>
    </div>
    <div class="details">
        <p v-if="showDetails">{{player.details}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
    props:['player'],
    data(){
        return{
            showDetails:false,
            uri:'http://localhost:3000/players/' + this.player.id
        }
    },
    methods:{
        deletePlayer(){
            fetch(this.uri, {method: 'DELETE' })
                .then(() => this.$emit('delete', this.player.id))
                .catch(err=>console.log(err))

        },
        toggleComplete(){
            fetch(this.uri,{
                method:'PATCH',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({complete:!this.player.complete})
            }).then(()=>{
                this.$emit('complete',this.player.id)
            }).catch((err)=>console.log(err))

        }
    }

}
</script>

<style>
.player{
    margin:20px auto;
    background-color: rgb(250, 250, 246);
    border-radius: 3px;
    padding:10px 20px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0,05);
    border-left: 5px solid #fc2525;
    
}
h3{
    cursor: pointer;
}
.actions{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons{
    font-size:20px;
    margin-left:10px;
    color:#918d8f;
    cursor: pointer;
}
.material-icons:hover{
    color:rgb(55, 54, 56);
}
/*completed projects*/
.player.complete{
    border-left:5px solid #00ce89;
}
.player.complete .tick{
    color:#00ce89;
}
</style>