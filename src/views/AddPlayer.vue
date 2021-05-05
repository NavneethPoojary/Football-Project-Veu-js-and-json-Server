<template>
  <form @submit.prevent="handleSubmit">
      <label>Nmae:</label>
      <input type="text" v-model="name" required >
      <label>Details:</label>
      <textarea  v-model="details" required ></textarea>
      <button>Add Player Details</button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            details:''
        }
    },
    methods:{
        handleSubmit(){
            let player={
                name:this.name,
                details:this.details,
                complete:false
            }
            fetch('http://localhost:3000/players',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(player)
            }).then(()=>{
                this.$router.push('/')
            }).catch((err)=>console.log(err))
        }
    }

}
</script>

<style>
form{
    background-color:white;
    padding:20px;
    border-radius: 11px;
}
label{
    display: block;
    color:#bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input{
    padding:10px;
    border:0;
    border-bottom:1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
textarea{
    border: 1px solid #ddd;
    padding:10px;
    width:100%;
    box-sizing: border-box;
}
form button{
    display:block;
    margin:20px 0 auto;
    background:#00ce89;
    color:white;
    padding:10px;
    border-radius: 6px;
    font-size:16px;
}
</style>