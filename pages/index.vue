<template lang="html">
  <main class="main-wrapper">
    <h1>Peruse</h1>
    <h3>Welcome back, Ben</h3>
    <recent-connections></recent-connections>
    <div class="row">
      <nuxt-link to="/new-site"><button>New Site</button></nuxt-link>
    </div>
  </main>
</template>

<script>
import RecentConnections from "~/components/RecentConnections.vue";
export default {
  components: {
    RecentConnections
  }
}
</script>

<style lang="css">



</style>
