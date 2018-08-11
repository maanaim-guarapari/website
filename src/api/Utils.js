
import axios from 'axios'

export default {
  doRequest (url, method, payload, headers) {
    let request = {
      url: url,
      data: payload,
      method: method,
      headers: headers
    }

    return axios(request)
      .then((res) => {
        return Promise.resolve(res.data)
      })
    // return axios[method](url, payload)
  },
  str: {
    masks: {
      zip: '#####-###',
      date: '##/##/####',
      cpf: '###.###.###-##',
      telephone: '##-####-####',
      cellphone: '##-#####-####'
    },
    format (mask, str) {
      let exit = mask.substring(0, 1)
      let text = mask.substring(str.length)

      if (text.substring(0, 1) !== exit) {
        str += text.substring(0, 1)
      }

      return str
    }
  }
}
