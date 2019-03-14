<template>
  <main class="main-wrapper">
    <h1>Add New</h1>
    <input placeholder="URL" class="mt" v-model="website"/>
    <button @click="go" v-if="showButton">Go</button>
  </main>
</template>

<script>
export default {
  data(){
    return {
      website: null,
      showButton: false
    }
  },
  methods: {
    go(){
      console.log("go pls...")
    }
  },
  watch: {
    website(){
      this.showButton = false;
      if (this.website){
        this.showButton = true;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
