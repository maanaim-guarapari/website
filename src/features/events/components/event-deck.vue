<template lang="html">
  <b-card-group deck class="event-deck">
    <b-col v-for="event in events"
           :key="event.id"
           class="card-col" md="3" sm="6">
      <event-info :event="event"/>
    </b-col>
  </b-card-group>
</template>

<script>

import { mapGetters } from 'vuex'

import EventInfo from './event-info.vue'

export default {
  components: {
    EventInfo
  },
  computed: {
    ...mapGetters('events', {
      events: 'eventList'
    })
  },
  mounted () {
    this.$store.dispatch('fetchEvents')
  }
}
</script>

<style lang="scss">

.event-deck {
  width: 100%;
  padding: 15px 0px 15px 15px;

  .card-col {
    padding: 0px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
}

</style>
