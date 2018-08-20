import api from '@/api/api.js'

const state = {
  events: [
    {
      time: 1512288000,
      date: '03/12/2017',
      title: 'Encontro de Louvor',
      img: '/static/img/logo.o.svg',
      location: 'Maanaim de Guarapari',
      description: 'O evento conta com uma taxa de inscrição de R$5,00',
      versicle: '"Que darei eu ao Senhor, por todos os benefícios que me tem feito? Tomarei o cálice da salvação, e invocarei o nome do Senhor." Salmos 116:12,13',
      aditional: {
        filesLink: 'https://drive.google.com/drive/folders/1Y6j9Zo0dno9B-wMX7g9PkyqgnlonF6D5?usp=sharing',
        subscriptionLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc49qMCFfxODJo2a2KfGj0oEH25OuE0bv7Sb5jJiEnZ7lDmQA/viewform?usp=sf_link'
      }
    }
  ]
}

// getters
const getters = {
  eventList: (state, getters, rootState) => {
    return state.events
  },
  nextEvents: (state, getters, rootState) => {
    var unixTimeNow = Math.round(+new Date() / 1000)
    var next = state.events.find(event => event.time >= unixTimeNow) || []
    // console.log((next.constructor === Array) ? next : [next['0']])
    // return (next.constructor === Array) ? next : [next['0']]
    return next
  }
}

// actions
const actions = {
  fetchEvents ({ commit }) {
    api.Events.get.all()
      .then((events) => {
        commit('addMultipleEvents', { events })
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

// mutations
const mutations = {
  addEvent (state, { event }) {
    if (event) {
      state.indexes.push(event)
    }
  },
  addMultipleEvents (state, { events }) {
    for (let item of events) {
      let pos = state.events.findIndex((event) => event.id === item.id)

      var date = new Date(item.time * 1000)
      item['date'] = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()

      if (pos !== -1) {
        state.events.splice(pos, 1)
        state.events.push(item)
      } else {
        state.events.push(item)
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
