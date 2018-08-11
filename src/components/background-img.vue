<template lang="html">
  <div class="background-img">
      <img :src="src"/>
  </div>
</template>

<script>
export default {
  props: [
    'src'
  ]
}
</script>

<style lang="scss">

.background-img {

    display: none;

    @media(min-width: 768px){
        display: block;
        position: fixed;
        margin-top: calc(-1 * #{$body-default-padding});
        z-index: -1;
        width: 100vw;
        height: 100vh;
        img {
            width: 100%;
            height: auto;
            opacity: 0.5;
            filter: alpha(opacity=50); /* For IE8 and earlier */
        }
    }
}

</style>
