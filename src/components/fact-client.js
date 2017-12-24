import axios from 'axios'

export const factClient = axios.create({
  baseURL: 'http://localhost:8888/api/fact/'
})
