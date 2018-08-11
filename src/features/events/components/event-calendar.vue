<template lang="html">
  <vue-event-calendar class="event-callendar" :events="events">
    <template slot-scope="props">
      <h3 v-if="events.length == 0" class="event-callendar-no-events">Sem eventos no momento</h3>
      <event-info v-else
                  v-for="event in props.showEvents"
                  :key="event.id"
                  :event="event"
      />
    </template>
  </vue-event-calendar>
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
  methods: {
    showAll () {
      this.$EventCalendar.toDate('all')
    }
  },
  mounted () {
    this.$store.dispatch('fetchEvents')
  }
}
</script>

<style lang="scss">

.event-callendar {

  margin-bottom: 0px;
  $background-color: rgba(white, 0);

  @media(min-width: 768px) {
    .cal-wrapper {
      padding: 25px 12.5px;
      border-radius: 10px 0px 0px 10px;

      .cal-body {
        .weeks > .item {
          line-height: 50px !important;
        }
        .dates > .item > .date-num {
          line-height: 45px !important;
        }
      }
    }
    .events-wrapper {
      padding: 0px;
      border-radius: 0px 10px 10px 0px;
    }
    @media(min-height: 600px) {
      height: 385px;
    }
    @media(min-height: 800px) {
      height: 550px;
    }
    @media(min-height: 900px) {
      height: 650px;
    }
  }

  .event-callendar-no-events {
    color: $default-text-color;
    text-align: center;
  }

  .cal-wrapper {
    padding: 0px;
    background-color: $background-color;

    .cal-header {
      background-color: transparent;
      padding-bottom: 0px;
    }

    .cal-body {
      .weeks > .item {
        line-height: 40px;
      }

      .dates {
        .item {
          .date-num {
            line-height: 35px;
          }
          .is-today {
            background-color: red !important;
          }
        }
        .event {
          .date-num {
            color: red !important;
          }
          .is-event{
            border-color: red !important;
            background-color: inherit !important;
          }
        }
      }
    }
  }

  .events-wrapper {
    margin-top: 0px;
    background-color: $background-color !important;
    .date {
      border-radius: 5px;
      background-color: rgba(0,0,0,.3);
    }
    .event-card {
      margin-bottom: 15px !important;
    }
  }
}

</style>
