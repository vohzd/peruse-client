<template lang="html">
  <section>
    <header-bar />
    <nuxt />
  </section>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";
export default {
  components: {
    "header-bar": HeaderBar
  }
}
</script>

<style lang="css">
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}img,embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #281c15;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 22px;
  }

  a {
    color: blue;
    text-decoration: none;
  }

</style>
