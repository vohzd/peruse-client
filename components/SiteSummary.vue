<template lang="html">
  <section class="mt">
    <nuxt-link to="new-site">
      <div class="site-element">
        <span class="icon-large">+</span>
        <span>Add a new site</span>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">

  .site-element {
    width: 256px;
    height: 256px;
    line-height: 276px;
    text-align: center;
    background: rgba(0,0,0,0.05);
    position: relative;
    color: black;
    transition: 1s all;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0px 0px 64px 0px rgba(0,0,0,0.2) inset;

  }

  .site-element:hover {
    opacity: 0.5;
  }

  .icon-large {
    font-size: 64px;
    position: absolute;
    text-align: center;
    left: calc(50% - 16px);
    margin-top: -44px;
  }

</style>
