<template lang="html">
  <header class="main-header">
    <avatar-icon class="main-header-element fixed-right"/>
  </header>
</template>

<script>

import AvatarIcon from "~/components/AvatarIcon.vue";

export default {
  components: {
    "avatar-icon": AvatarIcon
  }
}
</script>

<style lang="css">

  .main-header {
    width: 100%;
    padding: 24px;
    background: rgba(0,0,0,0.05);
    position: relative;
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.025) inset;
  }

  .fixed-right {
    position: absolute;
    right: 0;
    top: 0;
    margin: 8px;
  }

</style>
