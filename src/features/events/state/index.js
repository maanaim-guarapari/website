import api from '@/api/api.js'

const state = {
  events: [
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
