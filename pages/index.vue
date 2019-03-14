<template lang="html">
  <main class="main-wrapper">
    <h1>Peruse</h1>
    <h3>Welcome back, Ben</h3>
    <site-summary />
  </main>
</template>

<script>
import SiteSummary from "~/components/SiteSummary.vue";
export default {
  components: {
    "site-summary": SiteSummary
  }
}
</script>

<style lang="css">



</style>
