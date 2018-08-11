// initial state
const state = {
  musics: [
    {
      title: 'Aquilo que Fui não Sou Mais',
      artist: 'ICM',
      src: 'static/audio/0.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'Rádio Maanaim',
      artist: 'ICM',
      src: 'http://78.46.36.212:8068/stream',
      pic: 'static/img/radio-maanaim-logo.png'
    },
    {
      title: 'Avulso - Revelação de Jesus Cristo',
      artist: 'ICM',
      src: 'static/audio/10.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'A213 - Bodas do Cordeiro',
      artist: 'ICM',
      src: 'static/audio/1.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'A133 - Nesta Hora de Clamor',
      artist: 'ICM',
      src: 'static/audio/2.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: '3385 - Dá-me mais fé',
      artist: 'ICM',
      src: 'static/audio/3.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'C118 - Os dias estão passando',
      artist: 'ICM',
      src: 'static/audio/4.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'A179 - No clamor da noite',
      artist: 'ICM',
      src: 'static/audio/5.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'Avulso - A colheita',
      artist: 'ICM',
      src: 'static/audio/6.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'A207 - Confia e ora',
      artist: 'ICM',
      src: 'static/audio/7.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'Avulso - Na imensidão',
      artist: 'ICM',
      src: 'static/audio/8.mp3',
      pic: 'static/img/logo.square.png'
    },
    {
      title: 'A160 - Clamor de Ana',
      artist: 'ICM',
      src: 'static/audio/9.mp3',
      pic: 'static/img/logo.square.png'
    }
  ]
}

// getters
const getters = {
  playlist: (state, getters, rootState) => {
    return state.musics
  }
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
