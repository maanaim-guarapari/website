<template lang="html">
  <b-link :href="href ? href : ''"
          :to="to ? to : ''"
          :target="target"  class="col-xs-6 col-md-3 image-card">
    <b-card
            :img-src="src"
            :img-alt="alt"
            overlay no-body>
    </b-card>
  </b-link>
</template>

<script>
export default {
  props: [
    'href',
    'to',
    'src',
    'alt',
    'target'
  ]
}
</script>

<style lang="scss">

.image-card {

  padding: 0px;
  margin-right: 15px;
  margin-bottom: 15px;

  .card {
    padding: 15px;
    margin: 0px;
    height: 100%;
    background-color: rgba($body-bg, .7) !important;

    &:hover {
      border-color: #3097D1;
    }

    .card-img {
      margin: auto;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  @media (min-width: 576px) {
    padding-left: 0px !important;
    padding-right: 0px !important;
    .card {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0px !important;
  }
}

</style>
