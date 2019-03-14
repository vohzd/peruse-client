<template lang="html">
  <main>
    <section class="intro-block">
      <h1>Peruse</h1>
      <h3>Welcome back, Ben</h3>
      <site-summary />

    </section>
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

 .intro-block {
   margin: 64px;
 }

</style>
