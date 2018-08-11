<template lang="html">
  <b-card :img-src="event.img"
          img-top
          :title="event.title + ' - ' + date + ' as ' + time + ' no ' + event.location"
          class="event-card">
    <p>{{ event.description }}</p>
    <p><strong><em>{{ event.versicle }}</em></strong></p>
    <div slot="footer">
      <b-button variant="primary" target="_blank" :href="event.aditional.subscriptionLink">Inscrever-se</b-button>
      <b-button variant="primary" target="_blank" :href="event.aditional.filesLink">Material</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  props: [
    'event'
  ],
  computed: {
    date () {
      var date = new Date(this.event.time * 1000)
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      return day + '/' + month + '/' + date.getFullYear()
    },
    time () {
      var date = new Date(this.event.time * 1000)
      return date.getHours() + ':' + (date.getMinutes() < 10) ? ('0' + date.getMinutes()) : date.getMinutes()
    }
  }
}
</script>

<style lang="scss">

.event-card {

  background-color: $body-bg !important;
  margin: 0px !important;
  color: $default-text-color;

  .card-body {
    padding: 10px;
  }

  .card-footer {
    background-color: rgba($body-bg, .7) !important;
    text-align: right;
    padding: 10px;
    a {
      margin-left: 5px;
    }
  }
}

</style>
