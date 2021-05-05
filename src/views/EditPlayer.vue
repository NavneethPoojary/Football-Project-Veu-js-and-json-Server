<template>
  <form @submit.prevent="handleSubmit">
    <label>Name</label>
    <input type="text" v-model="name" required>
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Update Player</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      uri: 'http://localhost:3000/players/' + this.id,
      name: '',
      details: '',
    }
  },
  mounted() {
    fetch(this.uri)
      .then(res => res.json())
      .then(data => {
        this.name = data.name
        this.details = data.details
      }).catch(err => console.log(err))
  },
  methods:{
      handleSubmit(){
          fetch(this.uri, {
              method: 'PATCH',
              headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({name: this.name, details: this.details})
          }).then(()=>{
              this.$router.push('/')
          }).catch(err=>console.log(err))
      }
  }
}
</script>

<style>
</style>