<template lang="html">
  <div class="music-player">
    <aplayer  class="player"
              :theme="theme"
              :music="musics[0]"
              :list="musics"
              preload="auto"
              list-max-height="150px"
              ref="aplayer"
    />
  </div>
</template>

<script>

import Aplayer from 'vue-aplayer'

export default {
  components: {
    Aplayer
  },
  props: {
    'theme': [String],
    'musics': [Array]
  },
  mounted () {
    this.$refs.aplayer.showList = false
  }
}
</script>

<style lang="scss">

.music-player {
  .player {
    background-color: white;
    position: fixed;
    z-index: 10000;
    bottom: 0%;
    right: 0%;
    margin: 0px;
    width: 100%;

    .aplayer-info {
      .aplayer-controller > .aplayer-time {
        .aplayer-volume-wrap {
          display: none !important;
        }
        .aplayer-icon-mode {
          display: none !important;
        }
      }
    }

    .aplayer-pic {
      background-color: white !important;
    }

    @media(min-width: 768px) {
      margin: 5px;
      width: 350px;
    }
  }
}

</style>
