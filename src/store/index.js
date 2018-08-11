import Vue from 'vue'
import Vuex from 'vuex'

import events from '@/features/events/state'
import musics from '@/features/music/state'
import aprendizJr from '@/features/aprendiz-jr/state'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    events,
    musics,
    aprendizJr
  },
  strict: debug
})
