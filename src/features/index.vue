<template>
  <div>
    <b-container fluid>
      <b-row class="header">
        <video class="bg-video" poster="static/img/maanaim_presentation.jpg" playsinline autoplay muted loop>
            <source src="static/img/maanaim_presentation.mp4" type="video/mp4">
        </video>
        <logo-animated/>
        <div class="arrow">
          <fa icon="angle-down" size="2x"/>
        </div>
      </b-row>
      <b-row class="projects">
        <b-col sm="3" md="2" class="projects-title">
            <h2>Nossos Projetos</h2>
        </b-col>
        <b-col sm="9" md="10">
          <b-row>
            <image-deck :images="projects" target="_self"/>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="events" v-if="events.length > 0">
        <b-col sm="3" md="2" class="events-title">
          <h2>Próximos eventos</h2>
          <b-link to="Eventos"><h4>Calendário</h4></b-link>
        </b-col>
        <b-col sm="9" md="10">
          <b-row>
            <event-deck :events="events"/>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="sites">
        <b-col sm="3" md="2" class="sites-title">
            <h2>Conheça a Maranata</h2>
        </b-col>
        <b-col sm="9" md="10">
          <b-row>
            <image-deck :images="sites" target="_blank"/>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <main-footer/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import MainFooter from '@/components/footer'
import EventDeck from './events/components/event-deck'
import ImageDeck from '@/components/images/image-deck'
import LogoAnimated from '@/components/logo-animated'

export default {
  components: {
    MainFooter,
    EventDeck,
    ImageDeck,
    LogoAnimated
  },
  computed: {
    ...mapGetters('events', {
      events: 'eventList'
    })
  },
  mounted () {
    this.$store.dispatch('fetchEvents')
  },
  data () {
    return {
      projects: [
        {
          src: 'static/img/projeto-aprendiz-jr.o.svg',
          to: '/aprendiz-jr',
          alt: 'Projeto Aprendiz Júnior'
        }
      ],
      sites: [
        {
          src: 'static/img/radio-maanaim-logo.svg',
          href: 'http://www.radiomaanaim.com.br',
          alt: 'Rádio Maanaim'
        },
        {
          src: 'static/img/instituto-biblico-logo.svg',
          href: 'http://www.institutoicm.org.br',
          alt: 'Instituto Bíblico'
        },
        {
          src: 'static/img/central-de-louvor-logo.svg',
          href: 'http://www.centraldelouvor.org.br',
          alt: 'Central de Louvor'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.header {

  $section-header-video-height: calc((100vw * 9) / 16);

  max-height: $section-header-video-height;

  @keyframes MoveUpDown {
    0% {
      bottom: calc(30px - 15px);
    }
    50% {
      bottom: 30px;
    }
    100% {
      bottom: calc(30px - 15px);
    }
  }

  .bg-video{
    width: 100vw;
    height: auto;
  }

  .arrow {
    display: none;
  }

  @media (min-width: 768px) {

    position: relative;
    min-height: calc(#{$section-header-video-height} - #{$body-default-padding});
    background-color: rgba(white, 0);

    .bg-video {
      position: fixed;
      top: 0px;
      z-index: -1;
    }

    .arrow {
      display: block !important;
      color: white;
      font-size: 40px;

      animation: MoveUpDown 1s linear infinite;
      position: absolute;
      left: 50vw;
      bottom: 0px;
    }
  }

  @media(min-width: 1200px){
    min-height: calc(#{$section-header-video-height} - #{$body-default-padding} - 100px);
  }
}

.projects {

  padding: 0px 15px 0px 15px;

  .projects-title {
    padding-top: 15px;
  }

  @media (min-width: 768px) {

    padding-bottom: 0px;
    background-color: rgba($default-light-bg, .7);

    .projects-title {
      text-align: right;
    }
  }
}

.events {

  padding: 0px 15px 0px 15px;
  background-color: white;

  .events-title {
    padding-top: 15px;
  }

  @media (min-width: 768px) {

    padding-bottom: 0px;
    background-color: rgba($default-light-bg, .8);

    .events-title {
      text-align: right;
    }
  }
}

.sites {

  padding: 0px 15px 0px 15px;

  .sites-title {
    padding-top: 15px;
  }

  @media (min-width: 768px) {

    padding-bottom: 0px;
    background-color: rgba($default-light-bg, .9);

    .sites-title {
      text-align: right;
    }
  }
}
</style>
