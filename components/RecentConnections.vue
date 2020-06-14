<template lang="html">
  <section class="mt">
    <h4>Recent Connections</h4>
    <div v-for="(connection, fingerprint) in connections" class="row" >
      <span>client fingerprint: {{ fingerprint }}</span>
      <span>visits: {{ connection.visits }}</span>
    </div>
  </section>
</template>

<script>

import { mapGetters }					from "vuex";

export default {
  data(){
    return {
      ws: null,
      connections: {}
    }
  },
  methods: {
    init(){
      // todo but this higher up
      this.ws = new WebSocket("ws://localhost:1789?token=ISADMIN");
      this.ws.onopen = (event) => {
        this.sendWebsocketMessage("admin-connection", "eiwhfioewifow");
      }
      this.ws.onmessage = (response) => {
        this.handleWebsocketResponse(JSON.parse(response.data));
      };
    },
    handleWebsocketResponse(message){
      this.connections = message;
    },
    sendWebsocketMessage(type, body){
      this.ws.send( JSON.stringify({ "type": type, "body": body }));
    }
  },
  mounted(){
    this.init();
  }
}
</script>

<style lang="css">


</style>
