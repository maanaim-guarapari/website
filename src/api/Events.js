import Env from './Env'
import Utils from './Utils'

export default {
  create (event) {
    let endpoint = Env.events.AWS_LAMBDA_CREATE
    return Utils.doRequest(endpoint, 'post', event)
  },
  delete (file) {
    let endpoint = Env.events.AWS_LAMBDA_DELETE + event.id
    return Utils.doRequest(endpoint, 'delete', null)
  },
  get: {
    one (id) {
      let endpoint = Env.events.AWS_LAMBDA_GET + id
      return Utils.doRequest(endpoint, 'get', null)
        .then((event) => {
          return Promise.resolve(event)
        })
    },
    all () {
      return Utils.doRequest(Env.events.AWS_LAMBDA_LIST, 'get', null)
        .then((events) => {
          if (events.data.length === events.itemsRetourned) {
            return Promise.resolve(events.data)
          } else {
            return { }
          }
        })
    }
  }
}
