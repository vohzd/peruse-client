<template lang="html">
  <section>
    <section>
      <h1>Peruse</h1>
      <h3>Welcome back, Ben</h3>
    </section>
    <site-summary />
  </section>
</template>

<script>
import SiteSummary from "~/components/SiteSummary.vue";
export default {
  components: {
    "site-summary": SiteSummary
  }
}
</script>

<style lang="css" scoped>
</style>
