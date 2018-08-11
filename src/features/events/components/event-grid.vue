<template lang="html">
  <b-card-group columns  class="event-grid">
    <h4 class="event-grid-no-events" v-if="events.length == 0">Sem eventos no momento.</h4>
    <event-info v-else
                v-for="event in events"
                :key="event.id"
                :event="event"
    />
  </b-card-group>
</template>

<script>

import EventInfo from 'event-info.vue'

export default {
  components: {
    EventInfo
  },
  props: [
    'events'
  ]
}
</script>

<style lang="scss">

.event-grid {

  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 25px;

  .event-card {
    margin-bottom: 20px !important;
  }
}

</style>
