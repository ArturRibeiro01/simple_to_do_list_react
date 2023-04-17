import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://api.desafioteste.com.br',
})

// export const api = axios.create({
//   baseURL: 'http://localhost:3333',
// })
