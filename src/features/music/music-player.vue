<template lang="html">
  <div class="music-player">
    <aplayer  class="player"
              :theme="theme"
              :music="musics[0]"
              :list="musics"
              preload="none"
              listMaxHeight="250px"
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
    'fixed': [String],
    'theme': [String],
    'musics': [Array],
    'hidden': [Boolean],
    'partialHidden': [Boolean]
  }
}
</script>

<style lang="scss">

.music-player {

  $smscr-player-width: 100vw;
  $lgscr-player-width: 500px;
  $smscr-player-list-height: 250px;
  $lgscr-player-list-height: $smscr-player-list-height;
  $smscr-player-music-pic-size: 100px;
  $lgscr-player-music-pic-size: 130px;
  $smscr-player-music-info-height: $smscr-player-music-pic-size;
  $lgscr-player-music-info-height: $lgscr-player-music-pic-size;

  .player {
    width: $smscr-player-width;
    background-color: white;
    position: fixed;
    z-index: 10000;
    bottom: 0%;
    left: calc(100vw - #{$smscr-player-music-pic-size});
    margin: 0px;

    .aplayer-pic {
      background-color: white !important;
    }

    .aplayer-info {
      // margin-left: $smscr-player-music-info-height;
      height: $smscr-player-music-info-height;

      .aplayer-controller > .aplayer-time {
        .aplayer-volume-wrap {
          display: none !important;
        }
        .aplayer-icon-mode {
          display: none !important;
        }
        .aplayer-icon-menu {
          display: none !important;
        }
      }
    }

    .aplayer-list {
      z-index: 10000;
      height: 0px !important;
    }

    &:hover {
      left: 0px;

      .aplayer-list {
        height: $smscr-player-list-height !important;
      }
    }

    @media(min-width: 768px) {
      margin: 5px;
      width: $lgscr-player-width;
      left: calc(100vw - #{$lgscr-player-music-pic-size} - 25px);

      &:hover {
        left: calc(100vw - #{$lgscr-player-width} - 25px);
      }

      .aplayer-pic {
        margin: 5px;
        height: calc(#{$lgscr-player-music-pic-size} - 10px);
        width: calc(#{$lgscr-player-music-pic-size} - 10px);
      }

      .aplayer-info {
        // margin-left: calc(#{$lgscr-player-music-info-height} + 10px);
        height: $lgscr-player-music-info-height !important;
      }
    }
  }
}

</style>
