<template lang="html">
  <section class="mt">
    <h4>Recent Connections</h4>
  </section>
</template>

<script>

import { mapGetters }					from "vuex";
import io 										from "socket.io-client";

export default {
  data(){
    return {
      socket: io("http://localhost:1337")
    }
  },
  methods: {
    init(){
      console.log(this.socket)
      this.socket.on("user-action", (actionData) => {
				this.handleUserAction(actionData);
			});
    },
    handleUserAction(actionData){
      console.log("user action here");
      console.log(actionData);
    }
  },
  mounted(){
    this.init();
  }
}
</script>

<style lang="css">


</style>
