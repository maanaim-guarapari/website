<template lang="html">
  <div>
    <background-img src="static/img/events/events-bg.jpg"/>
    <b-container class="events-container">
      <b-row>
        <b-col>
          <h1>Calendário de Eventos</h1>
          <p>Aqui estão nossos próximos eventos! Inscreva-se!</p>
        </b-col>
      </b-row>
      <b-row>
        <event-calendar/>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import BackgroundImg from '@/components/background-img.vue'
import EventCalendar from './components/event-calendar.vue'

export default {
  components: {
    BackgroundImg,
    EventCalendar
  }
}
</script>

<style lang="scss">

.events-container {
  margin-top: 25px;
  padding-top: 15px;
  border-radius: 10px;
  background-color: rgba(white, .9);
}

</style>
