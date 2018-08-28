<template>
  <div id="app">
    <music-player :musics="musics" theme="#FF0000"/>
    <navbar/>
    <router-view/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import Navbar from '@/components/navbar.vue'
import MusicPlayer from '@/features/music/music-player.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    MusicPlayer
  },
  computed: {
    ...mapGetters('musics', {
      musics: 'playlist'
    })
  }
}
</script>

<style lang="scss">
body {
  padding-top: $navbar-height;
  font-family: "Raleway", sans-serif !important;
  font-size: 14px;
  color: rgb(99, 107, 111) !important;
}
</style>
